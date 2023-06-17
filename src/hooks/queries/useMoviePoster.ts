import getMoviePoster from "@/services/getMoviePoster";
import { useQuery } from "@tanstack/react-query";

const useMoviePoster = (url: string) => {
    return useQuery(["movie-poster", url], () => getMoviePoster(url));
};

export default useMoviePoster;
