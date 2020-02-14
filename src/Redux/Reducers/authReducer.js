import {
  login,
  logout,
  registerUser,
  handleAuth,
  getProfileFetch
} from "../Actions/Actions";

const initialState = {
  isLoggedIn: false,
  currentUser: {}
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case login.toString():
      return {
        ...state,
        isLoggedIn: true
      };

    case logout.toString():
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      };

    case handleAuth.toString():
      return {
        ...state,
        currentUser: action.payload
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

    default:
      return state;
  }
};

export default authReducer;
