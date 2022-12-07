import { USER_ACTION_TYPES } from "./user.types";

export const USER_INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case USER_ACTION_TYPES.FETCH_AUTH_STATUS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_ACTION_TYPES.USER_REGISTER_START:
    case USER_ACTION_TYPES.USER_SIGN_IN_START:
    case USER_ACTION_TYPES.USER_SIGN_OUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ACTION_TYPES.USER_REGISTER_SUCCEEDED:
    case USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED:
      return {
        ...state,
        user: action.payload,
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
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
