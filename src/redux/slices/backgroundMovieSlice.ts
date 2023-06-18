import { ReactNode } from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MoviesState {
    movies: ReactNode[];
    activeBackground: number;
}

const MoviesSlice = createSlice({
    name: "movie",
    initialState: { movies: [], activeBackground: 0 } as MoviesState,
    reducers: {
        addMovie(state, action: PayloadAction<ReactNode[]>) {
            state.movies = action.payload;
        },
        getActivebackground(state, action: PayloadAction<number>) {
            state.activeBackground = action.payload;
        },
    },
});

export const { addMovie, getActivebackground } = MoviesSlice.actions;
export default MoviesSlice.reducer;
