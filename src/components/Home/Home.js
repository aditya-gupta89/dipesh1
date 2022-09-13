import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import { useEffect } from "react";
import {useDispatch} from 'react-redux';
import {fetchAsyncMovies,fetchAsyncShows} from "../../features/movies/movieSlice";
// import MovieApi from "../../common/api/MovieApi";
// import { APIKey } from "../../common/api/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
    const dispatch=useDispatch()
  useEffect(() => {
    // const movieText = "Harry";   
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
    

    // const fetchMovies = async () => {
    //   const response = await MovieApi.get(
    //     `?apiKey=${APIKey}&s=${movieText}&type=movie`   
    //   )
    //    .catch(err=>{
    //         console.log("Err :",err);
    //   })
    //   dispatch(addMovies(response.data));
    // };
    // fetchMovies();
  },[dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
