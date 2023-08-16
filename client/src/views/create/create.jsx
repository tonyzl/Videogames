import {useEffect, useState} from "react";
import "./create.styles.css";
import {Link} from "react-router-dom";
import {newVg} from "../../redux/actions"
import { useDispatch } from "react-redux";
import axios from "axios"
//import { newVg } from '../../redux/actions/index'; // Importa la acción correspondien

function Create() {

  const dispatch=useDispatch()
 
  const [genres, setGenres] = useState([]);

  //const allGenres = useSelector((state) => state.genres);


  
  useEffect(() => {
    axios.get("http://localhost:3001/genres/")
      .then((response) => {
        if (response.data) {
          // algo
          setGenres(response.data);
          console.log(genres);
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
  });

  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
    genres: "",

  });

  const [error, setError] = useState({
    name: "requerido",
    description: "requerido",
    platforms: "requerido",
    image: "requerido",
    released: "requerido",
    rating: "requerido",
    genres: "requerido",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  //debo crar la action correspondiente 
  const handleSubmit = (event) => {
    event.preventDefault();
   

   // Validación de campos
   if (!input.name || !input.description || !input.platforms  || !input.image || !input.released|| !input.rating || !input.genres) {
    // Mostrar mensaje de error
    alert('Por favor completa todos los campos obligatorios.');
    return;
  }


  // Creación del videojuego
  dispatch(newVg(input)); // Llama a la acción para crear el videojuego
};

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label> Nombre: </label>
          <input name="name" type="text" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Description: </label>
          <input name="description" type="text"  value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Platforms: </label>
          <input name="platforms" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Image: </label>
          <input name="image" type="url" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Released: </label>
          <input name="released" type="date" min={"1950-01-01"} value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Genres: </label>
          <input name="genres"  value={input.value} onChange={handleChange} />
          <span>{error.genres}</span>
        </div>
        <div>
          <label> Rating: </label>
          <input name="rating" type="number" min={1} max={5} value={input.value} onChange={handleChange} />
        </div>
              <button type="submit">Sumbit</button>
      </form>
    </div>
  );
}

export default Create;
