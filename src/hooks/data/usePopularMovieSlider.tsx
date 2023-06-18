import { MovieCardProps } from "@/components/MovieCard/MovieCard";
import usePopularMoviesListQuery from "../queries/usePopularMoviesListQuery";
import useFillSlider from "./useFillSlider";
import { ReactNode } from "react";

const usePopularMovieSlider = () => {
    const { data } = usePopularMoviesListQuery();
    let slides: ReactNode[] = [];
    if (data) {
        slides = useFillSlider({ slides: data.results, large: false });
    }

    return slides;
};

export default usePopularMovieSlider;
