import { ALERT_TYPES } from "./alert.type";
import { ALERT_ACTION_TYPES } from "./alert.type";

const ALERT_INITIAL_STATE = {
  message: "",
  status: null,
  type: null,
};

export const alertReducer = (state = ALERT_INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_ACTION_TYPES.SET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        type: ALERT_TYPES.ALERT_ERROR,
      };
    case ALERT_ACTION_TYPES.SET_SUCCESS_ALERT:
      return {
        message: action.payload,
        status: null,
        type: ALERT_TYPES.ALERT_SUCCESS,
      };
    case ALERT_ACTION_TYPES.CLEAR_ALERT:
      return {
        ...ALERT_INITIAL_STATE,
      };
    default:
      return state;
  }
};
