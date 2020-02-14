import { login, logout, registerUser, handleAuth } from "../Actions/Actions";

const initialState = {
  isLoggedIn: false,
  profile: {}
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
        isLoggedIn: false
      };

    case handleAuth.toString():
      console.log(action.payload);

      return {
        ...state,
        profile: action.payload
      };

    case registerUser.toString():
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
