import React,{useState} from "react";

const MovieCard = ({name,img,rating}) =>{
	return(
		<React.Fragment>
			<img id="movie-image" alt="movie" src={img}/>
			<h1 id="movie-name">{name} and It's {rating}</h1>
			<br/>
		</React.Fragment>
	);

}

export default MovieCard;
