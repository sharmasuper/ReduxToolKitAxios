import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const {data,index} = props
    console.log("cardData",data)
  return (
    <Link to={`/movie/${data.imdbID}`}>
    <div className='container-fluid'>
         <div  style={{width:"200px"}} key={index}>
            <img src={data.Poster} alt={data.Title} width="200px" height="200px" />
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
         </div>
    </div>
    </Link>
    
  );
}

export default MovieCard;
