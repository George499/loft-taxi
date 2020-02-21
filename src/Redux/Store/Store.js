import { createStore, applyMiddleware, compose } from "redux";
import { loadState, saveState } from "../../localStorage";
// import loggerMiddleware from "../Middlewares/middleware";
import authSaga from "../Sagas/rootSaga";
import { authReducer } from "../Reducers/authReducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();
const getStore = createStore(
  authReducer,
  persistedState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

getStore.subscribe(() => {
  saveState(getStore.getState());
});

sagaMiddleware.run(authSaga);

export default getStore;
