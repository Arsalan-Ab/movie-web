import getUpcomingMovieList, {
    UpccomingMovieQueryParams,
} from "@/services/getUpcomingMovieList";
import { useQuery } from "@tanstack/react-query";

const useUpcomingMovieListQuery = (query?: UpccomingMovieQueryParams) => {
    return useQuery<MoviesServerResponse>(["upcoming-movie-list"], () =>
        getUpcomingMovieList(query)
    );
};

export default useUpcomingMovieListQuery;
