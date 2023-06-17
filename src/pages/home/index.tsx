import MovieCard from "@/components/MovieCard/MovieCard";
import MainSwiper from "@/components/MainSwiper/MainSwiper";
import { Box, Typography } from "@mui/material";
import SlideSwiper from "@/components/SlideSwiper/SlideSwiper";
import { getApi } from "@/services/utils/axios";
import axios from "axios";
import { MAIN_URL } from "@/constant/constants";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import useMoviePoster from "@/hooks/queries/useMoviePoster";
import usePopularMoviesListQuery from "@/hooks/queries/usePopularMoviesListQuery";
import { get } from "http";
import Image from "next/image";
import usePopularMovieSlider from "@/hooks/data/usePopularMovieSlider";

const HomePage = () => {
    const { data } = usePopularMoviesListQuery();
    // const { data } = useMoviePoster("eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg");
    const slides = usePopularMovieSlider();
    console.log(data);
    return (
        <>
            <Box>
                <Typography className="mb-2">New Movies</Typography>
                <MainSwiper />
                {/* <img src={data} /> */}
                {/* <Image
                    src={
                        "https://image.tmdb.org/t/p/w300/eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg"
                    }
                    width={500}
                    height={400}
                    alt="s"
                    unoptimized={true}
                /> */}
            </Box>
            <Box
                // paddingX={10}
                position={"relative"}
                // sx={{ maxWidth: "1100px" }}
            >
                <Typography className="mb-2">Categories</Typography>
                <SlideSwiper slides={slides} />
            </Box>
        </>

        // <MovieCard />
    );
};

export default HomePage;
