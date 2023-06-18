import queryStringGenerator from "@/helper/queries";
import { getApi } from "./utils/axios";
import { PopularMovieQueryParams } from "./getPopularMovieList";

export type UpccomingMovieQueryParams = Pick<QueryParams, "page" | "language">;

const getUpcomingMovieList = async (query?: UpccomingMovieQueryParams) => {
    let queries = null;
    if (query) {
        queries = queryStringGenerator(query);
    }
    return await getApi(`movie/upcoming${queries != null ? queries : ""}`);
};

export default getUpcomingMovieList;
