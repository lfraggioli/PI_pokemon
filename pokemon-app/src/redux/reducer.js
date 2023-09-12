import { GET_LIST } from "./actionTypes";

const initialState = {
  pokeList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        pokeList: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
