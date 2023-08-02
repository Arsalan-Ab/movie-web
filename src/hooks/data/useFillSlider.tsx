import MovieCard, { MovieCardProps } from "@/components/MovieCard/MovieCard";
import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

interface FillSliderProps {
    large: boolean;
    background?: boolean;
    movies: MovieResult[];
}

const useFillSlider = ({ movies, large, background }: FillSliderProps) => {
    return movies.map((movie, index) => (
        <SwiperSlide key={index}>
            <MovieCard
                large={large}
                background={background}
                title={movie.title}
                src={large ? movie.backdrop_path : movie.poster_path}
            ></MovieCard>
        </SwiperSlide>
    ));
};

export default useFillSlider;
