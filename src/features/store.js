import { configureStore } from "@reduxjs/toolkit";
import { Slice } from "@reduxjs/toolkit";
import movieSlice from "./movies/MovieSlice";
const store =configureStore(
{
    reducer:{movies:movieSlice.reducer},
}
)