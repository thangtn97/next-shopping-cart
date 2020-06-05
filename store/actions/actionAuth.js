import * as actionTypes from "./actionTypes";

export const authStart = (email, password, isLogin) => {
  return {
    type: actionTypes.AUTH_START,
    email,
    password,
    isLogin,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};
