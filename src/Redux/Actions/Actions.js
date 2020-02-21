import { createAction } from "redux-actions";

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
export const registerUser = createAction("REGISTER");
export const handleAuth = createAction("HANDLE_AUTH");
export const getProfileFetch = createAction("GET_PROFILE_FETCH");
export const creditCardSubmit = createAction("CREDIT_CARD_SUBMIT");
export const creditCardGet = createAction("CREDIT_CARD_GET");

export const getAddressListRequest = createAction("GET_ADDRESS_LIST_REQUEST");
export const getAddressListFetch = createAction("GET_ADDRESS_LIST_FETCH");

export const getCoordinatesRequest = createAction("GET_COORDINATES_REQUEST");
export const getCoordinatesSuccess = createAction("GET_COORDINATES_SUCCESS");
