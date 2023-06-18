import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";
import MovieCard from "../MovieCard/MovieCard";
import { Box } from "@mui/material";
import { ReactNode } from "react";

interface MainSwiperProps {
    slides: ReactNode[];
}

const MainSwiper = ({ slides }: MainSwiperProps) => {
    return (
        <Box>
            <Swiper
                slidesPerView="auto"
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {slides.map((slide) => (
                    <SwiperSlide>{slide}</SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default MainSwiper;
