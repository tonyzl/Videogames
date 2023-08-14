import {useState} from "react";
import "./create.styles.css";
import {Link} from "react-router-dom";
import {getVgs} from "../../redux/actions"

function Create() {
  const [input, setInput] = useState({
    name: "",
    description: "",


  });

  const [error, setError] = useState({
    name: "requerido",
    rating: "",
  });


  //(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?  validar una URL
  const validate = (input) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      setError({...error, name: "Formato invalido"});
      return;
    }
    setError({...error, name: ""});
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  //debo crar la action correspondiente 
  function handleSubmit(e) {
    e.preventDefault();
    //dispatch(getVgs()); // no es getVgs

    
  }

  return (
    <div className="container">
      <form onSubmit={""}>
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
        {error.genres ? null : <Link to={`/home`}><button type="submit">Sumbit</button></Link>}
      </form>
    </div>
  );
}

export default Create;
