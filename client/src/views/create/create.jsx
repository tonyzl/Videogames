import {useEffect, useState} from "react";
import "./create.styles.css";
import {newVg} from "../../redux/actions"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios"





function Create() {

  const platforms=[  
    "PC"
,

    "PlayStation 5"
,
 
    "Xbox One"
,

    "PlayStation 4"
,

    "Xbox Series S/X"
 ,
 
    "Nintendo Switch"
,
 
    "iOS"
  ,
  
    "Android"
 ,
 
    "Nintendo 3DS"
 ,
 
    "Nintendo DS"
,
  
    "Nintendo DSi"
 ,
  
    "macOS"
 ,
  
    "Linux"
 ,
  
    "Xbox 360"
 ,
  
    "Xbox"
 ,
  
    "PlayStation 3"
 ,
 
    "PlayStation 2"
  ,
 
    "PlayStation"]

  const date = new Date();

  const dispatch=useDispatch()
  const navigate = useNavigate(); 
  const [genres, setGenres] = useState([]);

  //const allGenres = useSelector((state) => state.genres);


  
  useEffect(() => {
    axios.get("http://localhost:3001/genres/")
      .then((response) => {
        if (response.data) {
          // algo
          setGenres(response.data);
          //console.log(genres);
        } else {
          //console.log("Zero regs");
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

  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: "",
    image: "",
    released: "",
    rating: "",
    genres: [],

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

  function handleSelect(e) {
    const selectedGenre = e.target.options[e.target.selectedIndex].value;
    setInput({
      ...input,
      genre: [...input.selectedGenre, selectedGenre],
    });
  }

  function setMaxDate() {
    let currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('fechaCampo').setAttribute('max', currentDate);
  }

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
   

    console.log(input);

   // Validación de campos
   if (!input.name || !input.description || !input.platforms  || !input.image || !input.released|| !input.rating ) {
    // Mostrar mensaje de error
    alert('Por favor completa todos los campos obligatorios.');
    return;
  }

  if(!selectedGenres.length) {alert('Por favor completa todos los campos obligatorios.') ;return}
  /*function setMaxDate() {
    var currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('fechaCampo').setAttribute('max', currentDate);
  }*/


  // Creación del videojuego
  dispatch(newVg({...input,genres:selectedGenres})); // Llama a la acción para crear el videojuego

  navigate("/home"); 
  

};

const [selectedGenres, setSelectedGenres]=useState([]);
const [showGenres, setShowGenres]=useState(false);

function HandleChangeGenre (event){
  const genreName=event.target.value
  if(selectedGenres.includes(genreName)){
    setSelectedGenres(selectedGenres.filter(genre=>genre!==genreName))
  }else{
    setSelectedGenres([...selectedGenres,genreName])
  }
  
}



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
          <label> Platfoms: </label>
          <select name="platforms" onChange={handleChange}>


          {
            platforms&&
            platforms?.map((platform)=>{
            return <option value={platform}>{platform}</option>
            })
          }
          </select>
        </div>



        <div>
          <label> Image: </label>
          <input name="image" type="url" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Released: </label>
          <input name="released" type="date" min={"1950-01-01"} max={date} value={input.value} onChange={handleChange} />
        </div>

        <div>
          <button type="button" onClick={()=>setShowGenres(!showGenres)}> Genres: </button>
          {showGenres&&(         
          
            <div className="genreMenu">
            {
            genres&&
            genres?.map((genre)=>(
            <div><input type="checkbox" value={genre.name} onChange={HandleChangeGenre}/><label >{genre.name}</label></div>
            ))
            }
            </div>)
          }
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
