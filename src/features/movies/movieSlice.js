import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/MovieApi";
import { APIKey } from "../../common/api/MovieApiKey";
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",
async ()=>{
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
}
);
export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesText = "Friends";
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${seriesText}&type=series`
      );
      
      return response.data;
    }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
      return response.data;
    }
  );
const initialState={
    movies:{},
    show:{},
    selectMovieOrShow: {},
}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        // addMovies:(state,{payload})=>{
        //     state.movies=payload;
        // },
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
          },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncShows.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, selectMovieOrShow: payload };
          },
    }
});
// export const {addMovies}=movieSlice.actions;
export const {removeSelectedMovieOrShow}=movieSlice.actions
export default movieSlice;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export const getAllMovies=(state)=>state.movies.movies;