import queryStringGenerator from "@/helper/queries";
import { getApi } from "@/services/utils/axios";

export interface PopularMovieQueryParams extends QueryParams {
    language?: string;
}

const getPopularMovieList = async (query?: PopularMovieQueryParams) => {
    let queries = null;
    if (query) {
        queries = queryStringGenerator(query);
    }
    return await getApi(`movie/popular${queries != null ? queries : ""}`);
};

export default getPopularMovieList;
