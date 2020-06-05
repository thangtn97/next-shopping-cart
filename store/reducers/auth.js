import * as actionTypes from "../actions/actionTypes";
export const stateAuth = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  isLogged: false,
};

const reducer = (state = stateAuth, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false,
        isLogged: true,
      };
    case actionTypes.AUTH_FAIL:
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
