import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import authReducer from "./reducers/auth";
import rootSaga from "./sagas/sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { stateCart } from "./reducers/cart";
import { stateProducts } from "./reducers/products";
import { stateAuth } from "./reducers/auth";

const initialState = {
  products: { ...stateProducts },
  cart: { ...stateCart },
  auth: { ...stateAuth },
};
const makeStore = (context, initState = initialState) => {
  const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    auth: authReducer,
  });
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
