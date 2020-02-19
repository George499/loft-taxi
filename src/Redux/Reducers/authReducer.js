import {
  login,
  logout,
  registerUser,
  getProfileFetch,
  creditCardSubmit,
  creditCardGet
} from "../Actions/Actions";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  creditCardData: {}
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
        ...state,
        isLoggedIn: false,
        currentUser: {}
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

    default:
      return state;
  }
};
