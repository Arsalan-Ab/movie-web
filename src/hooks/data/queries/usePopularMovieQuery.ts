import queryStringGenerator from "@/helper/queries";
import { getApi } from "@/services/utils/axios";

export interface PopularMovieQueryParams extends QueryParams {
    language?: string;
}

const usePopularMovieQuery = async (query?: PopularMovieQueryParams) => {
    let queries = "";
    if (query) {
        queries = queryStringGenerator(query);
    }
    console.log(queries);
    return queries;
};

export default usePopularMovieQuery;
