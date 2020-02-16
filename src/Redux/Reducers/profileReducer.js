import { creditCardSubmit } from "../Actions/Actions";

const initialState = {
  creditCardData: {}
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case creditCardSubmit.toString():
      return {
        ...state,
        creditCardData: action.payload
      };
    default:
      return state;
  }
};
