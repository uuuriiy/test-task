"use server";

import axiosConfig from "@/utils/axiosConfig";
import { Data } from "../types/index"

export const getData = async (url: string) => {
    let data: Data | undefined = undefined;
    let isError = false;
    let error = "";

  try {    
    const res = await axiosConfig.get(url);    
    data = res.data;
  } catch (e) {
    isError = true;

    if (typeof e === "string") error = e;
    else if (e instanceof Error) error = e.message;
    else error = "Error";
  }

  return { data, isError, error };
}
