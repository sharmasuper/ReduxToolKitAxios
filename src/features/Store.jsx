import { configureStore } from '@reduxjs/toolkit'
import MovieSlice from './movies/MovieSlice'

export const Store = configureStore({
    reducer : {
        Movies : MovieSlice
    }
})