import axios from "axios";
import {
  GET_LIST,
  GET_NEXT,
  GET_PREVIOUS,
  SET_CURRENT_PAGE,
} from "./actionTypes";
const baseURL = "https://pokeapi.co/api/v2/";

export const getList = (page, limit = 12) => {
  return async (dispatch) => {
    try {
      let calc = (page - 1) * limit;
      const response = await axios(
        `${baseURL}pokemon?limit=${limit}&offset=${calc}`
      );
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
        currentPage: page,
        itemsPerPage: limit,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNextPage = () => {
  return async (dispatch, getState) => {
    try {
      const { currentPage } = getState();
      const limit = 12;
      const nextPage = currentPage + 1; // Calcular la página siguiente
      const offset = (nextPage - 1) * limit;

      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const { data } = response;
      const pokeArrayOfPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await axios(pokemon.url);

        return pokemonResponse.data;
      });
      const nextData = await Promise.all(pokeArrayOfPromises);
      dispatch({
        type: GET_NEXT,
        payload: nextData,
      });
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: nextPage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPreviousPage = () => {
  return async (dispatch, getState) => {
    try {
      const { currentPage } = getState();
      const limit = 12;
      const previousPage = currentPage - 1; // Calcular la página anterior
      if (previousPage <= 0) {
        // No retrocedas más allá de la página 1
        return;
      }
      const offset = (previousPage - 1) * limit;

      const response = await axios(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const { data } = response;
      const pokeArrayOfPromises = data.results.map(async (pokemon) => {
        const pokemonResponse = await axios(pokemon.url);
        return pokemonResponse.data;
      });
      const previousData = await Promise.all(pokeArrayOfPromises);

      dispatch({
        type: GET_PREVIOUS,
        payload: previousData,
      });
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: previousPage,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
