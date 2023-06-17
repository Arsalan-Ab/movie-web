import axios from "axios";
import { MAIN_URL, POSTER_URL } from "@/constant/constants";

interface Params {
    method: string;
    baseURL: string;
    headers: any;
}

const getConfig: Params = {
    method: "get",
    baseURL: MAIN_URL || POSTER_URL,
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmU4OGQ4N2U4ZGU1M2U1NDFhNTE5NzllNTJkM2UwNCIsInN1YiI6IjYxZjdlZWI0NWYyZGIxMDA0NDBhNmUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6L-HO8arLUQlJ5FdoqNAWnLVXqQZZgK2apnv5kQbRU",
    },
};

export async function getApi(url: string, poster?: string) {
    return await axios({
        ...getConfig,
        url: `/${url}`,
        baseURL: poster ? POSTER_URL : MAIN_URL,
        headers: poster ? {} : getConfig.headers,
    })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
}

const postConfig = {
    method: "post",
    baseURL: MAIN_URL,
    headers: {
        contentType: "application/json",
    },
};

export const postAPI = async (url: string, data: any) => {
    return await axios({
        ...postConfig,
        url: `/${url}`,
        data,
    })
        .then((response) => {
            console.log(response);
            return {
                status: response.status,
                data: response.data,
            };
        })
        .catch((error) => {
            console.log(error);
            return {
                status: error.status,
                data: error.response,
            };
        });
};
