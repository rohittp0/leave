import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import {AccessSession} from "@/app/api/models";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: 'openid email profile https://www.googleapis.com/auth/calendar.readonly',
                    access_type: 'offline'
                },
            },
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            (session as AccessSession).accessToken = token.accessToken as string;
            return session;
        },
    },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
