import { ReactNode } from "react";
import useFillSlider from "./useFillSlider";
import useUpcomingMovieListQuery from "../queries/useUpcomingMovieListQuery";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesSlides } from "@/redux/slices/backgroundMovieSlice";
import { RootState } from "@/redux/store";

const useUpcomingMovieSlider = () => {
    const dispatch = useDispatch();

    const { data } = useUpcomingMovieListQuery();
    if (data) {
        dispatch(addMoviesSlides(data.results));
    }

    let slides: ReactNode[] = [];
    if (data) {
        slides = useFillSlider({ movies: data.results, large: true });
    }

    return slides;
};

export default useUpcomingMovieSlider;
