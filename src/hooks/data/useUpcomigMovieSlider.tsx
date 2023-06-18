import { ReactNode } from "react";
import useFillSlider from "./useFillSlider";
import useUpcomingMovieListQuery from "../queries/useUpcomingMovieListQuery";

const useUpcomingMovieSlider = () => {
    const { data } = useUpcomingMovieListQuery();
    console.log(data);
    let slides: ReactNode[] = [];
    if (data) {
        slides = useFillSlider({ slides: data.results, large: true });
    }

    return slides;
};

export default useUpcomingMovieSlider;
