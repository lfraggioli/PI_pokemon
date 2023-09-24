import axios from "axios";
import {
  GET_LIST,
  GET_NEXT,
  GET_PREVIOUS,
  SET_CURRENT_PAGE,
  CREATE_POKEMON,
  SET_POKEMON_TYPES,
  FILTER_POKEMON_BY_TYPE,
} from "./actionTypes";
const baseURL = "https://pokeapi.co/api/v2/";

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_LIST,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

// Supongo que tienes definidas las constantes FILTER_POKEMON_BY_TYPE y baseURL

export const filterByType = (typeSelected) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${baseURL}pokemon?limit=1000&offset=0`);
      const dataRes = response.data;

      const filteredPokemon = await Promise.all(
        dataRes.results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          const data = response.data;
          return data; // Retorna el detalle del Pokémon
        })
      );

      // Ahora, puedes realizar el filtrado en el resultado filtrado por tipo
      const filteredByType = filteredPokemon.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name === typeSelected)
      );

      dispatch({
        type: FILTER_POKEMON_BY_TYPE,
        payload: filteredByType, // Envía los Pokémon filtrados por tipo
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getNextPage = () => {
  const endpoint = "http://localhost:3001/pokemon/next";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_NEXT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPreviousPage = () => {
  const endpoint = "http://localhost:3001/pokemon/previous";
  return async (dispatch) => {
    try {
      const { data } = await axios(endpoint);
      return dispatch({
        type: GET_PREVIOUS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPokemonTypes = () => async (dispatch) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const data = response.data;

    // Extraer los nombres de los tipos de los datos de la API
    const typeNames = data.results.map((type) => type.name);

    dispatch({
      type: SET_POKEMON_TYPES,
      payload: typeNames,
    });
  } catch (error) {
    console.error(error);
  }
};
export const addPokemon = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/pokemons",
        formData
      );
      dispatch({
        type: CREATE_POKEMON,
        payload: response.data,
      });
    } catch (error) {
      console.log("No se ha podido agregar el Pokemon.  ", error);
    }
  };
};
