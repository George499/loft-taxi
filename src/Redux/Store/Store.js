import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadState, saveState } from "../../localStorage";
import authSaga from "../Sagas/rootSaga";
import { authReducer } from "../Reducers/authReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const getStore = createStore(
  authReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

getStore.subscribe(() => {
  saveState(getStore.getState());
});

sagaMiddleware.run(authSaga);

export default getStore;
