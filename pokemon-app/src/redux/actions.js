import axios from "axios";
import { GET_LIST } from "./actionTypes";
const baseURL = "https://pokeapi.co/api/v2/";

export const getList = () => {
  return async (dispatch) => {
    try {
      const response = await axios(`${baseURL}pokemon?limit=10&offset=0`);
      const dataRes = response.data;
      const pokeArrayOfPromises = dataRes.results.map(async (pokemon) => {
        const response = await axios(pokemon.url);
        const data = response.data;

        return data;
      });
      const data = await Promise.all(pokeArrayOfPromises);
      return dispatch({
        type: GET_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
