import MovieCard from "@/components/MovieCard/MovieCard";
import MainSwiper from "@/components/MainSwiper/MainSwiper";
import { Box, Typography } from "@mui/material";
import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { getApi } from "@/services/utils/axios";
import usePopularMovieQuery from "@/hooks/data/queries/usePopularMovieQuery";

const HomePage = () => {
    usePopularMovieQuery({ language: "en-us", id: 2, limit: 4 });
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
