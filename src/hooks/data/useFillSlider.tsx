import MovieCard, { MovieCardProps } from "@/components/MovieCard/MovieCard";
import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

const useFillSlider = (slides: Result[]) => {
    return slides.map((slide, index) => (
        <SwiperSlide key={index}>
            <MovieCard title={slide.title} src={slide.poster_path}></MovieCard>
        </SwiperSlide>
    ));
};

export default useFillSlider;
