import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";
import authReducer from "../Reducers/authReducer";

const getStore = () => createStore(authReducer);
export default getStore;
