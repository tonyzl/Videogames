import "./detail.styles.css";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import axios from "axios"



function Detail() {

  const {id}  = useParams(); // integer or NaN

  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/videogames/id/${id}`)
      .then((response) => {
        if (response.data.name) {
          // algo
          setDetail(response.data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => window.alert(err));

    // desmontaje
    return () => {
      // ejecutar cuando se desmonte
      console.log("");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="container">
      {console.log(detail)}
      <h2>{detail.name}</h2>
 
      <img className="img-container" src={detail.background_image} alt=''/>


      <strong><p className="platform-list">
        {
          detail.platforms?
          detail.platforms.map((platform)=>{
            return <p>{platform.platform.name}</p>
          }):""
        }
      </p></strong>
      



      <strong><p className="platform-list">
        {
          detail.genres?
          detail.genres.map((genre)=>{
            return <p>{genre.name}</p>
          }):""
        }
      </p></strong>

      <p><strong>DESCRIPTION</strong></p>
      <p className="text-desc">{detail.description?.split("<p>")
      .join(" ")
      .split(".</p>")

      }</p>

      <strong><p>Date Released: {detail.released}</p></strong>
      <strong><p>Rating: {detail.rating}</p></strong>
      <strong><p>Identificador: {id}</p></strong>

    </div>
  );
}

export default Detail;
