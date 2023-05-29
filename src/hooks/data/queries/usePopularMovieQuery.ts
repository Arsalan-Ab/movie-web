import queryStringGenerator from "@/helper/queries";
import { getApi } from "@/services/utils/axios";

export interface PopularMovieQueryParams extends QueryParams {
    language?: string;
}

const usePopularMovieQuery = async (query?: PopularMovieQueryParams) => {
    let queries = null;
    if (query) {
        queries = queryStringGenerator(query);
    }
    console.log(queries);
    return await console.log(
        getApi(`movie/popular${queries != null ? queries : ""}`)
    );
};

export default usePopularMovieQuery;
