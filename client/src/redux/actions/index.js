import axios from "axios";


export const NEW_VG="NEW_VG"
export const GET_VGS = "GET_VGS";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER = "ORDER";
export const FILTERBYORIGIN = "FILTERBYORIGIN";
export const FILTERBYGENRE= "FILTERBYGENRE";



export function getVgs() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/videogames/");
      return dispatch({
        type: "GET_VGS",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }

  };
}


//Trae todos lo Videogames
export function getGenres() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/genres/");
      return dispatch({
        type: "GET_GENRES",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }

  };
}


//Filtra por nombre

export function getByName(name) {
  return async function (dispatch) {

    try {
      const response = await axios(`http://localhost:3001/videogames/?name=${name}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      alert(error.message);
    }

  };
}



export function orderVgs(order) {
  return { type: "ORDER", payload: order };
}

export function filteredById(param) {
  return { type: "FILTERBYORIGIN", payload: param };
}

export function filteredByGenre(param) {
  return { type: "FILTERBYGENRE", payload: param };

}


//Crea un nuevo Videogame
export const newVg = (data) => {
  return async function (dispatch) {

    try {
  
      const response = await axios.post('http://localhost:3001/videogames', data); 
      
      dispatch({
        type: NEW_VG,
        payload: response.data,
      });
      alert("Se ha creado un nuevo Videojuego!!!")

    } catch (error) {
      alert(error.message);
    }

  };
};