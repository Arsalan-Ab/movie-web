import getPopularMovieList, {
    PopularMovieQueryParams,
} from "@/services/getPopularMovieList";
import { useQuery } from "@tanstack/react-query";

const usePopularMoviesListQuery = (query?: PopularMovieQueryParams) => {
    return useQuery<MoviesServerResponse>(["popular-movie-list"], () =>
        getPopularMovieList(query)
    );
};

export default usePopularMoviesListQuery;
