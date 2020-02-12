import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";

const getInitialState = () => {
  let isLoggedIn = false;
  if (isLoggedIn === undefined) isLoggedIn = false;
  return { isLoggedIn };
};

const getStore = () =>
  createStore(rootReducer, { authReducer: { ...getInitialState() } });
export default getStore;
