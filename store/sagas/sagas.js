import { all, delay, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import axios from "axios";
import {
  fetchProductsSuccess,
  fetchProductsFailed,
} from "../actions/actionProducts";
import { authSuccess, authFail, logout } from "../actions/actionAuth";

//Products
//
function* fetchDataProducts() {
  try {
    const res = yield axios({
      method: "GET",
      url: "https://ecommerce-31a69.firebaseio.com/products.json",
    });
    yield put(fetchProductsSuccess(res.data));
  } catch (error) {
    yield put(fetchProductsFailed(error));
  }
}

//auth
//
function* authenticationStart(action) {
  let url = action.isLogin
    ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYIimUiEKh8d1Zthn5xIHOihyzcw0FuMs"
    : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYIimUiEKh8d1Zthn5xIHOihyzcw0FuMs";
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };

  try {
    const res = yield axios({
      method: "POST",
      url: url,
      data: authData,
    });
    yield put(authSuccess(res.data.idToken, res.data.localId));
    yield delay(res.data.expiresIn * 1000);
    yield put(logout());
  } catch (error) {
    yield put(authFail(error));
  }
}
//

function* rootSaga() {
  yield all([
    yield takeLatest(actionTypes.AUTH_START, authenticationStart),
    yield takeLatest(actionTypes.FETCH_DATA_PRODUCTS, fetchDataProducts),
  ]);
}

export default rootSaga;
