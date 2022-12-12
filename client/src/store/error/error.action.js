import { createAction } from "../../utils/createAction.utils";
import { ERROR_ACTION_TYPES } from "./error.type";
export const setError = (message, status, id = null) => {
  return createAction(ERROR_ACTION_TYPES.SET_ERRORS, { message, status, id });
};

export const clearError = () => createAction(ERROR_ACTION_TYPES.CLEAR_ERRORS);
