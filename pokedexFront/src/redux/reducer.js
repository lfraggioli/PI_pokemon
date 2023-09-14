import {
  GET_LIST,
  GET_NEXT,
  GET_PREVIOUS,
  SET_CURRENT_PAGE,
} from "./actionTypes";

const initialState = {
  pokeList: [],
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        // ...state,
        // pokeList: [...state.pokeList, ...action.payload], // Acumular los datos en lugar de reemplazarlos
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
