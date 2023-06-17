import { MovieCardProps } from "@/components/MovieCard/MovieCard";
import usePopularMoviesListQuery from "../queries/usePopularMoviesListQuery";
import useFillSlider from "./useFillSlider";
import { ReactNode } from "react";

const usePopularMovieSlider = () => {
    const { data } = usePopularMoviesListQuery();
    let slides: ReactNode[] = [];
    if (data) {
        slides = useFillSlider(data.results);
    }

    return slides;
};

export default usePopularMovieSlider;
