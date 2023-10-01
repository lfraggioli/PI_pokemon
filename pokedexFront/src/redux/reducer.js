import {
  GET_ALL,
  CREATE_POKEMON,
  FILTERTYPE,
  GET_LIST,
  GET_NEXT,
  GET_PREVIOUS,
  SET_POKEMON_TYPES,
  SET_PAGINATION,
  SORT_POKE_LIST,
  GET_SEARCH,
  GET_DB,
  GET_SORTED,
} from "./actionTypes";

const initialState = {
  allPokemon: [],
  backUp: [],
  myPokemons: [],
  pokeList: [],
  types: [],
  currentPage: 1,
  itemsPerPage: 12,
  searchResults: [],
  filteredPokemon: [],
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
    case FILTERTYPE:
      const filteredPokemon = state.allPokemon.filter((pokemon) =>
        pokemon.types.includes(action.payload)
      );
      return {
        ...state,
        filteredPokemon,
      };
    case GET_ALL:
      return {
        ...state,
        allPokemon: action.payload,
      };
    case GET_DB:
      return {
        ...state,
        myPokemons: action.payload,
      };
    case GET_LIST:
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_NEXT:
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_PREVIOUS:
      return {
        ...state,
        pokeList: action.payload,
      };
    case GET_SORTED:
      return {
        ...state,
        orderedPokemon: action.payload,
      };
    case SET_PAGINATION:
      return {
        ...state,
        currentPage: action.payload.page,
        itemsPerPage: action.payload.itemsPerPage,
      };
    case SORT_POKE_LIST:
      let sortedPokemon = state.allPokemon.slice().sort((a, b) => {
        if (action.payload === "asc") {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        }
      });
      return { ...state, allPokemon: sortedPokemon };
    default:
      return state;
  }
}

export default rootReducer;
