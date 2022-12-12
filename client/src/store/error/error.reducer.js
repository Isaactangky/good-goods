import { ERROR_ACTION_TYPES } from "./error.type";

const ERROR_INITIAL_STATE = {
  message: {},
  status: null,
  id: null,
};

export const errorReducer = (state = ERROR_INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR_ACTION_TYPES.SET_ERROR:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };
    case ERROR_ACTION_TYPES.CLEAR_ERROR:
      return {
        ...ERROR_INITIAL_STATE,
      };
    default:
      return state;
  }
};
