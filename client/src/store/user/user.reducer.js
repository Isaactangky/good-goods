import { USER_ACTION_TYPES } from "./user.types";

export const USER_INITIAL_STATE = {
  token: localStorage.getItem("token") || null,
  user: {},
  isLoading: false,
  isAuthenticated: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case USER_ACTION_TYPES.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.FETCH_AUTH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case USER_ACTION_TYPES.USER_SIGN_UP_SUCCEEDED:
    case USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case USER_ACTION_TYPES.USER_SIGN_UP_FAILED:
    case USER_ACTION_TYPES.USER_SIGN_IN_FAILED:
    case USER_ACTION_TYPES.FETCH_AUTH_FAILED:
    case USER_ACTION_TYPES.USER_SIGN_OUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: {},
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
