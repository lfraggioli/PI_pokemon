import {
  GET_ALL,
  CREATE_POKEMON,
  FILTERTYPE,
  GET_LIST,
  SET_POKEMON_TYPES,
  SET_PAGINATION,
  SORT_POKE_LIST,
  GET_DB,
  SET_ORIGIN,
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
        myPokemons: action.payload,
      };

    case FILTERTYPE:
      const filtered = state.allPokemon.filter((p) => {
        // Verificamos si e.temperaments es un array y contiene action.payload
        return Array.isArray(p.types) && p.types.includes(action.payload);
      });
      return {
        ...state,
        filteredPokemon: filtered,
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
    case SET_ORIGIN:
      return {
        ...state,
        filteredPokemon:
          action.payload !== "all"
            ? state.allPokemon.filter((poke) => {
                return action.payload === "api"
                  ? poke.id.length < 10
                  : typeof poke.id.length === "string";
              })
            : state.allPokemon,
      };
    // case GET_SORTED:
    //   return {
    //     ...state,
    //     orderedPokemon: action.payload,
    //   };
    case SET_PAGINATION:
      return {
        ...state,
        currentPage: action.payload.page,
        itemsPerPage: action.payload.itemsPerPage,
      };
    case SET_POKEMON_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SORT_POKE_LIST:
      const sortedPokemon = [...state.filteredPokemon].sort((a, b) => {
        if (action.payload === "asc") {
          // Verificamos si a y b tienen la propiedad 'name' antes de compararlas
          if (a.name && b.name) {
            return a.name.localeCompare(b.name);
          }
        } else if (action.payload === "desc") {
          // Verificamos si a y b tienen la propiedad 'name' antes de compararlas
          if (a.name && b.name) {
            return b.name.localeCompare(a.name);
          }
        }
        // Si la acción no es ni 'upward' ni 'falling', no cambiamos el orden.
        return 0;
      });
      return { ...state, filteredPokemon: sortedPokemon };
    default:
      return state;
  }
}

export default rootReducer;
