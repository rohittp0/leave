import { useState, useEffect } from 'react';

interface Loading {
    data: undefined;
    loading: true;
    error: undefined;
}

interface Success<T> {
    data: T;
    loading: false;
    error: undefined;
}

interface Exception {
    data: undefined;
    loading: false;
    error: Error;
}

type State<T> = Loading | Success<T> | Exception;

export default function useFetch<T>(url: string, options?: RequestInit): State<T> {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setData(data);
        };

        fetchData().finally(() => setLoading(false)).catch((error) => setError(error))
    }, [url, options]);

    return { data, loading, error } as State<T>;
};
