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
import { ReactNode } from "react";

interface SlideSwiperProps {
    slides: ReactNode[];
}

export default function SlideSwiper({ slides }: SlideSwiperProps) {
    const CustomNextButton = () => {
        return <button className="swiper-button-next"></button>;
    };

    const CustomPrevButton = () => {
        return <button className="swiper-button-prev"></button>;
    };
    return (
        <Box>
            <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        // width: 640,
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 768,
                        // spaceBetween: 30,
                        slidesPerView: 5,
                    },
                }}
                navigation
                modules={[Navigation]}
                // navigation={{
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev",
                // }}
                height={100}
            >
                {slides.map((slide) => (
                    <SwiperSlide>{slide}</SwiperSlide>
                ))}
            </Swiper>
            {/* <CustomNextButton />
            <CustomPrevButton /> */}
        </Box>
    );
}
