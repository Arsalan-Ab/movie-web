import { getApi } from "./utils/axios";

const getMoviePoster = async (url: string) => {
    return await getApi(`${url}`, "poster");
};

export default getMoviePoster;
