'use client'

import {SessionProvider} from "next-auth/react"
import {ReactNode} from "react";
import {Session} from "next-auth";
import {useRouter} from "next/navigation";

interface ProviderProps {
    children: ReactNode
    session:  Session | null
}

export default function NextAuthProvider({children, session}: ProviderProps) {
    const router = useRouter();

    if(!session)
        router.push('/api/auth/signin');

    return (
        <SessionProvider session={session}>
            {children}
        </ SessionProvider>
    );
}
