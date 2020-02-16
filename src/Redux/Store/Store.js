import { createStore, applyMiddleware } from "redux";
import { loadState, saveState } from "../../localStorage";
import loggerMiddleware from "../Middlewares/middleware";
import { authReducer } from "../Reducers/authReducer";

const persistedState = loadState();
const getStore = createStore(
  authReducer,
  persistedState,
  applyMiddleware(loggerMiddleware)
);

getStore.subscribe(() => {
  saveState(getStore.getState());
});

export default getStore;
