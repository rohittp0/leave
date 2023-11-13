import {Session} from "next-auth";

interface AccessSession extends Session {
    accessToken: string;
}

interface DateTime {
    dateTime: string;
    timeZone: string;
}

interface DateDay {
    date: string;
}

interface CalenderEvent {
    kind: string;
    etag: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    colorId: string;
    creator: {
        email: string;
        self: boolean;
    }
    organizer: {
        email: string;
        self: boolean;
    };
    start: DateTime | DateDay;
    end: DateTime | DateDay;
}
