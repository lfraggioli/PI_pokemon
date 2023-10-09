import axios from "axios";
import {
  CREATE_POKEMON,
  FILTERTYPE,
  GET_ALL,
  GET_LIST,
  SET_PAGINATION,
  SET_POKEMON_TYPES,
  GET_DB,
  SORT_POKE_LIST,
  SET_ORIGIN,
} from "./actionTypes";

export const getPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons/all";
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

export const getDBPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons/db";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_DB,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};

export const filterOrigin = (origin) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORIGIN,
      payload: origin,
    });
  };
};

export const getBackUpPokemons = () => {
  const endpoint = "http://localhost:3001/pokemons/all";
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint);

      return dispatch({
        type: GET_ALL,
        payload: data,
      });
    } catch (error) {
      return window.alert("Error", error);
    }
  };
};
export const fetchPokemon = (id) => {
  const baseURL = "https://pokeapi.co/api/v2/";
  return axios(`${baseURL}pokemon/${id}`).then((response) => {
    const data = response.data;
    const {
      id,
      name,
      sprites: {
        other: {
          home: { front_default },
        },
      },
      types,
      stats,
      weight,
      height,
    } = data;

    const pokeData = {
      id,
      name,
      sprites: front_default,
      types: types.map((e) => e.type.name),
      hp: stats[0].base_stat,
      attack: stats[1].base_stat,
      defense: stats[2].base_stat,
      speed: stats[5].base_stat,
      weight,
      height,
    };

    return pokeData;
  });
};
export const fetchDBPokemon = (id) => {
  const baseURL = "http://localhost:3001/pokemons/db";
  return axios(`${baseURL}/${id}`).then((response) => {
    const data = response.data;
    const { id, name, image, types, hp, attack, defense } = data;

    const pokeData = {
      id,
      name,
      image,
      types: types.map((e) => e.type.name),
      hp,
      attack,
      defense,
    };

    return pokeData;
  });
};

export const filterType = (filter) => {
  return {
    type: FILTERTYPE,
    payload: filter,
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

export const setPagination = (page, itemsPerPage) => {
  return {
    type: SET_PAGINATION,
    payload: {
      page,
      itemsPerPage,
    },
  };
};

export const sortPokeList = (order) => {
  return {
    type: SORT_POKE_LIST,
    payload: order,
  };
};
