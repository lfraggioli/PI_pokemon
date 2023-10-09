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
      const filtered = [...state.filteredPokemon].filter((p) => {
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
        filteredPokemon: action.payload,
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
      let breedsFromApiOrDbOrAll = [];
      // Si la acción es 'all', selecciona todas las razas
      if (action.payload === "all") {
        breedsFromApiOrDbOrAll = state.allPokemon;
        // Si la acción es 'db', selecciona solo las razas con ID de tipo 'string'
      } else if (action.payload === "db") {
        breedsFromApiOrDbOrAll = state.allPokemon.filter(
          (e) => e.id.length > 10
        );
        // Si la acción es 'api', selecciona solo las razas con ID de tipo 'number'
      } else if (action.payload === "api") {
        breedsFromApiOrDbOrAll = state.allPokemon.filter(
          (e) => typeof e.id === "number"
        );
      }
      return {
        ...state,
        filteredPokemon: breedsFromApiOrDbOrAll,
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
