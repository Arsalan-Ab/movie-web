import MovieCard from "@/components/MovieCard/MovieCard";
import MainSwiper from "@/components/MainSwiper/MainSwiper";
import { Box, Typography } from "@mui/material";
import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { getApi } from "@/services/utils/axios";
import usePopularMovieQuery from "@/hooks/data/queries/usePopularMovieQuery";
import axios from "axios";
import { MAIN_URL } from "@/constant/constants";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

const HomePage = () => {
    // usePopularMovieQuery({ language: "sad" });

    getApi("movie/popular");
    // usePopularMovieQuery();
    // const options = {
    //     method: "GET",
    //     headers: {
    //         accept: "application/json",
    //         Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmU4OGQ4N2U4ZGU1M2U1NDFhNTE5NzllNTJkM2UwNCIsInN1YiI6IjYxZjdlZWI0NWYyZGIxMDA0NDBhNmUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6L-HO8arLUQlJ5FdoqNAWnLVXqQZZgK2apnv5kQbRU",
    //     },
    // };

    // fetch("https://api.themoviedb.org/3/movie/popular?page=54", options)
    //     .then((response) => response.json())
    //     .then((response) => console.log(response))
    //     .catch((err) => console.error(err));
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
