import React, { useEffect } from 'react';
import MoviListing from '../MoviListing/MoviListing';
import moviApi from '../../common/moviApi';
import { APIkey } from '../../common/MoviApiKey';
import { useDispatch} from 'react-redux';
import {  fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

// import {addMovies} from '../../features/movies/MovieSlice'

function Home() {
  const dispatch = useDispatch()
 
 
  useEffect(()=>{
    //  const movieText = 'Harry';
     
    // const fetchMovies = async() =>{
    //   const Response = await moviApi.get(
    //     `&apikey=${APIkey}&s=${movieText}&type=movie`
    //   )
    //   .catch((err)=>{
    //     console.log("err",err)
    //   })
      // console.log("The response from Api",Response) 
        // dispatch(addMovies(Response.data))
      //because data is a key of content to all content reserved
    // }
    // fetchMovies()
    dispatch(fetchAsyncShows())
    dispatch(fetchAsyncMovies()) 
   
  },[dispatch])
  return (
   <div> 
    <div className='banner-img'></div>
    <MoviListing/> 
   </div>
  )
}

export default Home;
