import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DETAIL = "GET_DETAIL";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const POST_DOG = "POST_DOG";
export const ADD_DOG = "ADD_DOG";
export const FILTER_BY_VALUE = "FILTER_BY_VALUE";
export const FILTER_TEMPERAMENT = "FILTER_TEMPERAMENT";
export const FILTER_CREATED = "FILTER_CREATED";
export const CLEAN_Q = "CLEAN_Q";

export function getDogs() {  //aca sucede la conexion entre el front y el back
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    const json = await axios.get("http://localhost:3001/dogs/"+id);
    return dispatch({
      type: GET_DETAIL,
      payload: json.data,
    });
  };
}

export function getTemperaments() {
  return async (dispatch) => {
    let json = await axios.get("http://localhost:3001/temperaments");
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}

export const searchByName = (name) => {
  return async (dispatch) => {
    const json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: json.data,
    });
  };
};

export const addDog = ({
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  yearsMin,
  yearsMax,
  temperament,
}) => {
  return async (dispatch) => {
    await axios.post("http://localhost:3001/dogs/", {
      name,
      height: heightMin + " - " + heightMax,
      weight: weightMin + " - " + weightMax,
      lifeSpan: yearsMin + " - " + yearsMax + " years",
      temperament,
    });
    dispatch({
      type: ADD_DOG,
    });
  };
};
export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}
export function filterByTemperament(payload) {
  return {
    type: FILTER_TEMPERAMENT,
    payload,
  };
}
export function filterByValue(payload) {
  return {
    type: FILTER_BY_VALUE,
    payload,
  };
}
export function cleanQ(payload) {
  return {
    type: CLEAN_Q,
    payload,
  };
}
