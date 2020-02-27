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
  getCoordinatesSuccess,
  getChosenAdress,
  clearRoutes
} from "../Actions/Actions";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  creditCardData: {},
  addressList: [],
  addressCoordinates: [],
  routes: null
};
// AUTH
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
    // Profile
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

    // Routes
    case getAddressListRequest.toString():
      return {
        ...state
      };
    case getAddressListFetch.toString():
      return {
        ...state,
        addressList: action.payload
      };

    case getChosenAdress.toString():
      return {
        ...state,
        routes: action.payload
      };
    case getCoordinatesRequest.toString():
      return {
        ...state
      };
    case getCoordinatesSuccess.toString():
      return {
        ...state,
        addressCoordinates: action.payload
      };
    case clearRoutes.toString():
      return {
        ...state,
        addressCoordinates: []
      };

    default:
      return state;
  }
};
