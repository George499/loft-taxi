import { createStore, applyMiddleware } from "redux";
import authReducer from "../Reducers/authReducer";
import { loadState, saveState } from "../../localStorage";
import loggerMiddleware from "../Middlewares/middleware";
import initialState from "../Reducers/authReducer";

const persistedState = loadState();

const getStore = createStore(
  authReducer,
  persistedState,
  applyMiddleware(loggerMiddleware)
);

let userToken = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user")).token
  : false;

const initState = JSON.parse(localStorage.getItem("state")).profile
  ? { ...initialState, ...JSON.parse(localStorage.getItem("state")).profile }
  : initialState;

getStore.subscribe(() => {
  saveState(getStore.getState());
});

export default getStore;
