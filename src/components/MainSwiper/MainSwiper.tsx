import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination, Controller } from "swiper";
import MovieCard from "../MovieCard/MovieCard";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addSwiperController,
    setActivebackground,
} from "@/redux/slices/backgroundMovieSlice";
import { RootState } from "@/redux/store";

interface MainSwiperProps {
    slides: ReactNode[];
    backgroundHandler?: boolean;
    background?: boolean;
}

const MainSwiper = ({
    slides,
    backgroundHandler,
    background,
}: MainSwiperProps) => {
    const dispatch = useDispatch();
    const control = useSelector((state: RootState) => state.SwiperController);

    return (
        <Box>
            <Swiper
                onSwiper={
                    background
                        ? (swiper: any) => dispatch(addSwiperController(swiper))
                        : undefined
                }
                controller={
                    backgroundHandler ? { control: control } : undefined
                }
                slidesPerView="auto"
                modules={[Navigation, Pagination, Controller]}
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
