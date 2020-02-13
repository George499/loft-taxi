import {
  login,
  logout,
  handleProfileSubmit,
  handleProfileClear
} from "../Actions/Actions";

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

    case handleProfileSubmit.toString():
      return {
        ...state,
        profile: action.payload
      };

    case handleProfileClear.toString():
      return {
        ...state,
        profile: {}
      };

    default:
      return state;
  }
};

export default authReducer;
