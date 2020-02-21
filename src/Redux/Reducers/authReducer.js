import {
  login,
  logout,
  registerUser,
  getProfileFetch,
  creditCardSubmit,
  creditCardGet,
  getAddressListRequest,
  getAddressListFetch,
  getCoordinatesRequest,
  getCoordinatesSuccess
} from "../Actions/Actions";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  creditCardData: {},
  addressList: [],
  addressCoordinates: [],
  routes: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.toString():
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };

    case logout.toString():
      localStorage.removeItem("token");
      return {
        ...initialState
      };

    case registerUser.toString():
      return {
        ...state,
        currentUser: action.payload
      };
    case getProfileFetch.toString():
      return {
        ...state
      };
    case creditCardSubmit.toString():
      return {
        ...state,
        creditCardData: action.payload
      };
    case creditCardGet.toString():
      return {
        ...state,
        creditCardData: action.payload
      };

    case getAddressListRequest.toString():
      return {
        ...state
      };
    case getAddressListFetch.toString():
      return {
        ...state,
        addressList: action.payload
      };

    case getCoordinatesRequest.toString():
      return {
        ...state,
        routes: action.payload
      };
    case getCoordinatesSuccess.toString():
      return {
        ...state,
        addressCoordinates: action.payload
      };

    default:
      return state;
  }
};
