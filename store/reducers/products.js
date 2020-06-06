import * as actionTypes from "../actions/actionTypes";
export const stateProducts = {
  products: null,
  loading: true,
  error: null,
};

const reducer = (state = stateProducts, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };
    case actionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
