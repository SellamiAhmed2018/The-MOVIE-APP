import React,{useState} from "react";
import Movies from "./Movies.js";

const Contents = ({movies,children}) =>{
	return(
		<div id="container">
			{children}
			<Movies movies={movies}/>
		</div>
	)
}


export default Contents;