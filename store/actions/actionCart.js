import * as actionTypes from "./actionTypes";
export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item,
  };
};

export const clickMoreItem = (id) => {
  return {
    type: actionTypes.CLICK_MORE_ITEM,
    id: id,
  };
};

export const clickLessItem = (id) => {
  return {
    type: actionTypes.CLICK_LESS_ITEM,
    id: id,
  };
};

export const clickRemoveItem = (id) => {
  return {
    type: actionTypes.CLICK_REMOVE_ITEM,
    id: id,
  };
};

export const setValueItem = (value, id) => {
  return {
    type: actionTypes.SET_VALUE_ITEM,
    id: id,
    value: value,
  };
};
