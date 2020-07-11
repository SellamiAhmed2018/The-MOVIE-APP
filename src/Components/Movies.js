import React,{useState} from "react";
import MovieCard from "./MovieCard.js";


const Movies = ({movies}) => {

	return(
		<React.Fragment>
		{movies.map(movie => {
			return(<MovieCard name={movie.name} img={movie.img} rating={movie.rating} />)
		})}
		</React.Fragment>
	)
}

export default Movies;