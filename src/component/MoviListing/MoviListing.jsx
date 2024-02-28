import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice';
import MovieCard from '../../MoviCard/MovieCard';


function MoviListing() {
 const Movies =useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

 let renderMovies,renderShowes = "";
 renderMovies = Movies.Response === 'True' ?(Movies.Search.map((movie,index)=>{
     return   <div className='col-md-3' key={index}> <MovieCard key={index} data={movie}/>   </div> 
    // console.log("data",movie)
 })) : (<div className='movies-error'><h3>{Movies.Error}</h3></div>)



 renderShowes = shows.Response === 'True' ?(shows.Search.map((shows,index)=>{
     return   <div className='col-md-3' key={index}> <MovieCard key={index} data={shows}/></div> 
    // console.log("data",movie)
 })) : (<div className='movies-error'><h3>{shows.Error}</h3></div>)

return  <div className='container'> 
    <h1>Movies</h1>                    
    <div className='row'>
    {renderMovies}
    </div>
   <h1>Showes</h1>
    <div className='row'>
   {renderShowes}
   </div>

  </div>
 
  
}

export default MoviListing;
