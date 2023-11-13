"use client";
import {CalenderEvent} from "@/app/api/models";
import useFetch from "@/app/hooks/useFetch";

export default function Leaves() {
    const {data, error, loading} = useFetch<CalenderEvent[]>("/api/leaves");

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <div className="flex gap-2">
            {data.map((event) => (<h1 key={event.id}>{event.summary}</h1>))}
        </div>
    );
}
