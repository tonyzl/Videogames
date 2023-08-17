import "./navbar.styles.css";
import {Link} from "react-router-dom";
import axios from "axios"

import { useSelector,useDispatch } from "react-redux";
import { getGenres,filteredByGenre } from "../../redux/actions";
import { useEffect, useState } from "react";

function Navbar({handleChange, handleSubmit, handleOrder, handleFilteredById}) {

  const dispatch=useDispatch()
 
  const [genres, setGenres] = useState([]);
  const [booleano, setBooleano] = useState(false);


  
  useEffect(() => {
    axios.get("http://localhost:3001/genres/")
      .then((response) => {
        if (response.data) {
          // algo
          setGenres(response.data);
          //console.log(genres);
        } else {
          console.log("Zero regs");
        }
      })
      .catch((err) => console.log(err));

    // desmontaje
    return () => {
      // ejecutar cuando se desmonte
      console.log("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  function handleFilteredByGenre(event) {
    event.preventDefault();
    if(event.target.value){
      dispatch(filteredByGenre(event.target.value))
    }
    setBooleano(!booleano); // Se actualiza el componente!

  }


  return (
    <div className="search-box">

        <p>Sort: </p>
        <select onChange={handleOrder}>
          <option value=""></option>
          <option value="X">A-Z</option>
          <option value="Y">Z-A</option>
          <option value="A">RatingUp</option>
          <option value="D">RatingDown</option>
        </select>

        <p>Genre: </p>
        <select onChange={handleFilteredByGenre}>
          <option value="default"></option>

          {
            genres&&
            genres?.map((genre)=>{
            return <option value={genre.name}>{genre.name}</option>
            })
          }

        </select>

        <p>Origen: </p>
        <select onChange={handleFilteredById}>
          <option value=""></option>
          <option value="API">API</option>
          <option value="BDD">LOCAL</option>
          

        </select>



      <form onChange={handleChange}>
        <input placeholder="Busqueda" type="search" />
        <button type="submit" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
      <Link to={`/create`}><button className='btn-create'>New VG</button></Link>

    </div>
  );
}

export default Navbar;
