import {Link} from "react-router-dom";
import "./card.styles.css";

function Card({name,image,genres,rating,id}) {
  

  return (
    <div className="card-container">
        <Link to={`/home/${id}`}>
        <img className="img-container" src={image} alt=''/>
        <h2>{name}</h2>

        <p className="platform-list">
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
