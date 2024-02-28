import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveSelectedMovieOrShow, fetchAsyncMoviesorShowDetail, getSelectedMoviesorShow  } from '../../features/movies/MovieSlice';
function MoviDetail() {
  const {imdbId} = useParams();
 
  const dispatch = useDispatch();
  const Both = useSelector((state)=>state.Movies.getSelectedMoviesorShow); 
  const {Title, Poster,Year} = Both
  console.log("id Data",Both)
  useEffect(()=>{
    dispatch(fetchAsyncMoviesorShowDetail(imdbId))

   return () =>{dispatch(RemoveSelectedMovieOrShow())}

  },[dispatch,imdbId])

  return (                    
    <>
    {Object.keys(Both).length===0?(<div>...Loading</div>):( <div className='container'>
      <h2>{Title}</h2>
      <p>{Year}</p>
     <img src={Poster} alt="book"/>
     </div>)}
    
     </>
  )
}

export default MoviDetail;
