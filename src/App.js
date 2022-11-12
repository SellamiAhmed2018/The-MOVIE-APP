import React,{useState} from "react";
import style from "./style.css";
import PropTypes from 'prop-types';
import Contents from "./Components/Contents.js";
import Header from "./Components/Header.js";
import NewMovie from "./Components/NewMovie.js";
import Modal from 'react-modal';
import "bootstrap/dist/css/bootstrap.css";
import MovieList from "./Movies.json";


const App = () =>{
  var [movies,setMovies] = useState(MovieList.popular_movies);
  return(
    <React.Fragment>
      <Header />
      <Contents movies={movies}>
        <NewMovie movies={movies} setMovies={setMovies}/>
      </Contents>
    </React.Fragment>
  );
}

export default App;
