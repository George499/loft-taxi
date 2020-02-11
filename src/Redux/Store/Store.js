import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";

const getInitialState = () => {
  let { isLoggedIn, profile } = localStorage.state;
  if (profile === undefined) profile = {};
  if (isLoggedIn === undefined) isLoggedIn = false;
  return { isLoggedIn: isLoggedIn, profile: profile };
};

const getStore = () =>
  createStore(rootReducer, { authReducer: { ...getInitialState() } });
export default getStore;
