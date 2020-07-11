import React,{useState} from "react";

const MovieCard = ({name,img,rating}) =>{
	return(
		<React.Fragment>
			<h1 id="movie-name">{name} and It's {rating}</h1>
			<img id="movie-image" alt="movie" src={img}/>
		</React.Fragment>
	);

}

export default MovieCard;