import { ReactNode } from "react";
import { createSlice } from "@reduxjs/toolkit";

interface BackgroundMovieState {
    movies: MovieResult[];
    activeBackground: number;
}

export const backgroundMovieSlice = createSlice({
    name: "movie",
    initialState: { movies: [], activeBackground: 0 } as BackgroundMovieState,
    reducers: {},
});
