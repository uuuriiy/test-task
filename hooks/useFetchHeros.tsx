'use client';

import { useState, useEffect, useCallback } from 'react';
import { getData } from "../actions/getData";
import { Heros } from "../types/Heros"

export const useFetchHeros = (url: string) => {
    const [heros, setHeros] = useState<Heros>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchHeros = useCallback(async () => {
        setIsLoading(true);
        const { data, isError, error } = await getData(url);
        setIsLoading(false);
        if (!isError) setHeros(data);
        else {
          setIsError(isError);
          setError(error);
        }
    }, [url]);

    useEffect(() => {   
        fetchHeros();
    }, [url]);

    return {
        heros, error,
        isLoading, isError
    }
};