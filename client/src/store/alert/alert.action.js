import { createAction } from "../../utils/createAction.utils";
import { ALERT_ACTION_TYPES } from "./alert.type";
export const setError = (message, status) => {
  return createAction(ALERT_ACTION_TYPES.SET_ERRORS, { message, status });
};
export const setSucessAlert = (message) => {
  return createAction(ALERT_ACTION_TYPES.SET_SUCCESS_ALERT, message);
};
export const clearAlert = () => createAction(ALERT_ACTION_TYPES.CLEAR_ALERT);
