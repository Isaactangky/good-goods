import rootReducer from "./rootReducer";
import { logger } from "redux-logger";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancer = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancer);
