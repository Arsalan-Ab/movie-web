import { RootState } from "@/redux/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import useFillSlider from "./useFillSlider";

const useBackgroundSlider = () => {
    const movies = useSelector((state: RootState) => state.movies);
    const activeBackground = useSelector(
        (state: RootState) => state.activeBackground
    );

    let slides: ReactNode = [];

    slides = useFillSlider({ movies: movies, large: true, background: true });

    return slides;
};

export default useBackgroundSlider;
