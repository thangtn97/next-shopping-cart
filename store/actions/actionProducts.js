import * as actionTypes from "./actionTypes";

export const fetchDataProducts = () => {
  return {
    type: actionTypes.FETCH_DATA_PRODUCTS,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFailed = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILED,
    error: error,
  };
};
