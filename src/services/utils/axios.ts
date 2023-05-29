import axios from "axios";
import { MAIN_URL } from "@/constant/constants";

interface Params {
    baseUrl: string;
    header: any;
    method: string;
}

const getConfig: Params = {
    baseUrl: MAIN_URL,
    header: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmU4OGQ4N2U4ZGU1M2U1NDFhNTE5NzllNTJkM2UwNCIsInN1YiI6IjYxZjdlZWI0NWYyZGIxMDA0NDBhNmUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6L-HO8arLUQlJ5FdoqNAWnLVXqQZZgK2apnv5kQbRU",
    },
    method: "GET",
};

export async function getApi(url: string) {
    return await axios({
        ...getConfig,
        url: `${getConfig.baseUrl}/${url}`,
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
}

const postConfig = {
    baseUrl: MAIN_URL,
    header: {
        contentType: "application/json",
    },
    method: "post",
};

export const postAPI = async (url: string, data: any) => {
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}`,
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
