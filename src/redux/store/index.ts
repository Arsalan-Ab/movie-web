import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "../slices/backgroundMovieSlice";

const store = configureStore({
    reducer: MoviesReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
