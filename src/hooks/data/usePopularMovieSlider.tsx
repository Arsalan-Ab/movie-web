import { MovieCardProps } from "@/components/MovieCard/MovieCard";
import usePopularMoviesListQuery from "../queries/usePopularMoviesListQuery";
import useFillSlider from "./useFillSlider";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { addMoviesSlides } from "@/redux/slices/backgroundMovieSlice";

const usePopularMovieSlider = () => {
    const { data } = usePopularMoviesListQuery();
    let slides: ReactNode[] = [];

    if (data) {
        slides = useFillSlider({
            movies: data.results,
            large: false,
        });
    }
    return slides;
};

export default usePopularMovieSlider;
