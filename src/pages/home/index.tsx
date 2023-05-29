import MainSwiper from "@/components/MainSwiper/MainSwiper";
import MovieCard from "@/components/MovieCard/MovieCard";
import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
    return (
        <>
            <Box paddingX={10} className="w-3/4">
                <Typography className="mb-2">New Movies</Typography>
                <MainSwiper />
            </Box>
            <Box
                paddingX={10}
                position={"relative"}
                sx={{ maxWidth: "1100px" }}
            >
                <Typography className="mb-2">Categories</Typography>
                <SlideSwiper />
            </Box>
        </>

        // <MovieCard />
    );
};

export default HomePage;
