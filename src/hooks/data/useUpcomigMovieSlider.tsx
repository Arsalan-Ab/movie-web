import { ReactNode } from "react";
import useUpcomingMovieListQuery from "../queries/useUpcomingMovieListquery";
import useFillSlider from "./useFillSlider";

const useUpcomingMovieSlider = () => {
    const { data } = useUpcomingMovieListQuery();
    console.log(data);
    let slides: ReactNode[] = [];
    if (data) {
        slides = useFillSlider(data.results);
    }

    return slides;
};

export default useUpcomingMovieSlider;
