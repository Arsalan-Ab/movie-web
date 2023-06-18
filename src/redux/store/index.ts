import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../slices/backgroundMovieSlice";

const store = configureStore({
    reducer: MoviesReducer,
});

export default store;
