import "./navbar.styles.css";
import {Link} from "react-router-dom";

function Navbar({handleChange, handleSubmit, handleOrder, handleFilteredById, handleFilteredByGenre}) {



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
          <option value=""></option>
          <option value="A">Racing</option>
          <option value="B">Shooter</option>
          <option value="C">Adventure</option>
          <option value="D">Action</option>
          <option value="E">RPG</option>
          <option value="F">Fighting</option>
          <option value="G">Puzzle</option>
          <option value="H">Strategy</option>
          <option value="I">Arcade</option>
          <option value="J">Simulation</option>
          <option value="K">Sports</option>
          <option value="L">Card</option>
          <option value="M">Family</option>
          <option value="N">Board Games</option>
          <option value="O">Educational</option>
          <option value="P">Casual</option>
          <option value="Q">Indie</option>
          <option value="R">Massively Multiplayer</option>
          <option value="S">Platformer</option>
        </select>

        <p>Origen: </p>
        <select onChange={handleFilteredById}>
          <option value=""></option>
          <option value="A">API</option>
          <option value="B">LOCAL</option>
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
