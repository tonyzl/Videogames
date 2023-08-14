import axios from "axios";

export const GET_VGS = "GET_VGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const ORDER = "ORDER";
export const FILTERBYORIGIN = "FILTERBYORIGIN";
export const FILTERBYGENRE= "FILTERBYGENRE";

export function getVgs() {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/videogames/");
    return dispatch({
      type: "GET_VGS",
      payload: response.data,
    });
  };
}

export function getByName(name) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/?name=${name}`);
    return dispatch({
      type: "GET_BY_NAME",
      payload: response.data,
    });
  };
}




export function getDetail (id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/videogames/${id}`);
    return dispatch({
      type: "GET_DETAIL",
      payload: response.data,
    });
  };
};


export function orderVgs(order) {
  return { type: "ORDER", payload: order };
}

export function filteredById(param) {
  return { type: "FILTERBYORIGIN", payload: param };
}

export function filteredByGenre(param) {
  return { type: "FILTERBYGENRE", payload: param };
}