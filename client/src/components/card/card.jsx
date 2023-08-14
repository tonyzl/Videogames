import {Link} from "react-router-dom";
import "./card.styles.css";

function Card({name,image,genres,rating,id}) {
  //const {name,image,genres,rating,id} = vg;

  /* 
  
        <Link to={`/home/${id}`}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{platforms}</p>
        <p>{image}</p>
        <p>{released}</p>
        <p>{rating}</p>
      </Link>
  
  */


  return (
    <div className="card-container">
        <Link to={`/home/${id}`}>
        <h2>{name}</h2>
        <img className="img-container" src={image} alt=''/>
        <p><strong>GENRES:</strong></p>
        <p >
        {
          genres?
          genres.map((genre)=>{
            return <p>{genre.name}</p>
          }):""
        }
        </p>
        <p><strong>Rating:{rating}</strong></p>
      </Link>
    </div>
  );
}

export default Card;
