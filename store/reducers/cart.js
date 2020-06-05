import * as actionTypes from "../actions/actionTypes";

export const stateCart = {
  cart: [],
};

const reducer = (state = stateCart, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let newCart = state.cart;
      let inCart = false;
      for (let item of newCart) {
        if (item.id === action.item.id) {
          item.quantity++;
          newCart = [...newCart];
          inCart = true;
          break;
        }
      }
      if (!inCart) {
        action.item.quantity = 1;
        newCart = [...newCart, action.item];
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case actionTypes.CLICK_LESS_ITEM: {
      let newCart = state.cart;
      for (let item of newCart) {
        if (item.id === action.id) {
          item.quantity--;
          newCart = [...newCart];
          break;
        }
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    case actionTypes.CLICK_MORE_ITEM: {
      let newCart = state.cart;
      for (let item of newCart) {
        if (item.id === action.id) {
          item.quantity++;
          newCart = [...newCart];
          break;
        }
      }
      return {
        ...state,
        cart: newCart,
      };
    }

    case actionTypes.CLICK_REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    case actionTypes.SET_VALUE_ITEM: {
      let newCart = state.cart;
      for (let item of state.cart) {
        if (item.id === action.id) {
          item.quantity = action.value;
          newCart = [...newCart];
          break;
        }
      }
      return {
        ...state,
        cart: newCart,
      };
    }
    default:
      return state;
  }
};

export default reducer;
