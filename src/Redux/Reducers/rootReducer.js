import { combineReducers } from "redux";
import { profileReducer } from "../Reducers/profileReducer";
import { authReducer } from "../Reducers/authReducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  profileReducer: profileReducer
});

export default rootReducer;
