import { USER_ACTION_TYPES } from "./user.types";

export const USER_INITIAL_STATE = {
  token: localStorage.getItem("token"),
  user: null,
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
    case USER_ACTION_TYPES.FETCH_AUTH_STATUS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };

    case USER_ACTION_TYPES.USER_REGISTER_SUCCEEDED:
    case USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case USER_ACTION_TYPES.USER_SIGN_OUT_SUCCEEDED:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    case USER_ACTION_TYPES.USER_REGISTER_FAILED:
    case USER_ACTION_TYPES.USER_SIGN_IN_FAILED:
    case USER_ACTION_TYPES.USER_LOGOUT:
    case USER_ACTION_TYPES.FETCH_AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
