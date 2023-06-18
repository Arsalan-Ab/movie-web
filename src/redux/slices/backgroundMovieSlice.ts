import { ReactNode } from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BackgroundMovieState {
    movies: ReactNode[];
    activeBackground: number;
}

const backgroundMovieSlice = createSlice({
    name: "movie",
    initialState: { movies: [], activeBackground: 0 } as BackgroundMovieState,
    reducers: {
        addMovie(state, action: PayloadAction<ReactNode[]>) {
            state.movies = action.payload;
        },
        getActivebackground(state, action: PayloadAction<number>) {
            state.activeBackground = action.payload;
        },
    },
});

export const { addMovie, getActivebackground } = backgroundMovieSlice.actions;
export default backgroundMovieSlice.reducer;
