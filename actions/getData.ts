"use server";

import axiosConfig from "@/utils/axiosConfig";

export const getData = async (url, setData, setIsError, setError) => {
    try {
        const result = await axiosConfig.get(url);
    } catch (error) {
        
    }
}
