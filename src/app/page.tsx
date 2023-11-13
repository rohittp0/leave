"use client";
import { useSession } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

            </div>
        </main>
    );
}

export default Home;
