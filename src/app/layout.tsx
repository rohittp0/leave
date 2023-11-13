import './globals.css'
import {ReactNode} from "react";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import NextAuthProvider from "@/app/context/NextAuthProvider";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Leave',
    description: 'Leave me alone',
}

export default async function RootLayout({children}: { children: ReactNode }) {

    const session = await getServerSession(authOptions)

    return (
        <html lang="en">
        <body className={inter.className}>
        <NextAuthProvider session={session}>
            {children}
        </NextAuthProvider>
        </body>
        </html>
    )
}
