import React,{useState} from "react";
import Modal from 'react-modal';

Modal.setAppElement('#root')

const NewMovie = ({movies,setMovies}) => {
	const [modalIsOpen,setmodalIsOpen] = useState(false)
	const [movie,setMovie] = useState("");
	const [rating,setRating] = useState("");
	const [img,setImg] = useState("");

  return (
   <div>
     <Modal isOpen={modalIsOpen} onRequestClose={()=>{setmodalIsOpen(!modalIsOpen)}}>
       <h1>film information</h1>
       <label>Film Name : </label>
       <input type="text" onChange={(e)=>{setMovie(e.target.value)}} />
       <label>Film rating :</label>
       <input type="text" onChange={(e)=>{setRating(e.target.value)}} />
       <label>Film Image : </label>
       <input type="text" onChange={(e)=>{setImg(e.target.value)}} />
       <button onClick={()=>{
       	movies=[...movies,{name:movie,rating:rating,img:img}];
       	setMovies(movies);
       	setmodalIsOpen(!modalIsOpen);
       }}>Add</button>
     </Modal>
     <button onClick={()=>{setmodalIsOpen(!modalIsOpen)}}>Add film</button>

   </div>
	)
}

export default NewMovie;
