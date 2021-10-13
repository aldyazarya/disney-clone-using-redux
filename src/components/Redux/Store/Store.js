// whole global state of my disney movies and then its providing
// all data in to every single state => is called category;


import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../Reducers/MovieReducer";

export const Store = configureStore({
    reducer: {
        movie: MovieReducer
    }
})