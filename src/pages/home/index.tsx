import MovieCard from "@/components/MovieCard/MovieCard";
import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { Box } from "@mui/material";

const HomePage = () => {
    return (
        <>
            <Box className="flex-grow">fdsdf</Box>
            <Box className="justify-self-end" style={{ width: "700px" }}>
                <SlideSwiper />
            </Box>
        </>

        // <MovieCard />
    );
};

export default HomePage;
