import MovieCard, { MovieCardProps } from "@/components/MovieCard/MovieCard";
import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

interface FillSliderProps {
    large: boolean;
    slides: Result[];
}

const useFillSlider = ({ slides, large }: FillSliderProps) => {
    return slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <MovieCard
                large={large}
                title={slide.title}
                src={large ? slide.backdrop_path : slide.poster_path}
            ></MovieCard>
        </SwiperSlide>
    ));
};

export default useFillSlider;
