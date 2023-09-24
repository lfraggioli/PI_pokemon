import {
  CREATE_POKEMON,
  FILTER_POKEMON_BY_TYPE,
  GET_LIST,
  GET_NEXT,
  GET_PREVIOUS,
  SET_CURRENT_PAGE,
  SET_POKEMON_TYPES,
} from "./actionTypes";

const initialState = {
  currentPage: 1,
  myPokemons: [],
  pokeList: [],
  types: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POKEMON:
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload],
        pokeList: [...state.pokeList, action.payload],
      };
    case SET_POKEMON_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case FILTER_POKEMON_BY_TYPE:
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_LIST:
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_PREVIOUS: // Maneja la acción GET_PREVIOUS para reemplazar la lista
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_NEXT:
      return {
        ...state,
        pokeList: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
