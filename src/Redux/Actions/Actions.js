import { createAction } from "redux-actions";

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
export const registerUser = createAction("REGISTER");
export const handleAuth = createAction("HANDLE_AUTH");
export const getProfileFetch = createAction("GET_PROFILE_FETCH");
