import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./SlideSwiper.module.scss";

// import required modules
import { FreeMode, Navigation } from "swiper";
import MovieCard from "../MovieCard/MovieCard";
import { Box } from "@mui/material";

export default function SlideSwiper() {
    const CustomNextButton = () => {
        return <button className="swiper-button-next"></button>;
    };

    const CustomPrevButton = () => {
        return <button className="swiper-button-prev"></button>;
    };
    return (
        <Box position={"relative"}>
            <Swiper
                freeMode
                slidesPerView={3}
                spaceBetween={20}
                modules={[Navigation, FreeMode]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard></MovieCard>
                </SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <CustomNextButton />
            <CustomPrevButton />
        </Box>
    );
}
