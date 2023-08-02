import { ReactNode } from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Swiper from "swiper";
import { SwiperProps } from "swiper/react";

interface MoviesState {
    movies: MovieResult[];
    activeBackground: number;
    SwiperController: any;
}

const MoviesSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
        activeBackground: 0,
        SwiperController: {},
    } as MoviesState,
    reducers: {
        addMoviesSlides(state, action: PayloadAction<MovieResult[]>) {
            state.movies = action.payload;
        },
        setActivebackground(state, action: PayloadAction<number>) {
            state.activeBackground = action.payload;
        },
        addSwiperController(state, action: PayloadAction<any>) {
            state.SwiperController = action.payload;
        },
    },
});

export const { addMoviesSlides, setActivebackground, addSwiperController } =
    MoviesSlice.actions;
export default MoviesSlice.reducer;
