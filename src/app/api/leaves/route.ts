import {AccessSession} from "@/app/api/models";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {NextResponse} from "next/server";

export async function GET() {
    const session = await getServerSession(authOptions);
    const calendarApiUrl = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';

    if(!session)
        return new NextResponse("Unauthorised", {status: 401});

    const response = await fetch(`${calendarApiUrl}?q=Leave`, {
        headers: {
            'Authorization': `Bearer ${(session as AccessSession).accessToken}`,
        }
    });

    const data = await response.json();

    return new NextResponse(JSON.stringify(data.items), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 200
    });
}
