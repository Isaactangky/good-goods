import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/createAction.utils";
import { setError, setSucessAlert } from "../alert/alert.action";
import axios from "axios";
axios.defaults.withCredentials = true;

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/auth/user`;

//setup config/headers
export const tokenConfig = (getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = getState().user.token;

  if (token) config.headers["x-auth-token"] = token;
  return config;
};

export const userSignUpStartAsync = (info) => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const { data } = await axios.post(`${API_URL}/register`, info);

    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_UP_SUCCEEDED, data));
    dispatch(setSucessAlert(`Successfully signed up as ${data.user.username}`));
    return data;
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response.status));
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_UP_FAILED));
  }
};

export const signInStartAsync = (info) => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const body = JSON.stringify(info);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(`${API_URL}/login`, body, config);
    dispatch(setSucessAlert(`Wellcome back! ${data.user.username}`));
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED, data));
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response.status));
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error));
  }
};

export const fetchAuthStatusStartAsync = () => async (dispatch, getState) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const config = tokenConfig(getState);
    if (!config.headers["x-auth-token"]) {
      return dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_FAILED));
    }
    const { data } = await axios.get(`${API_URL}`, config);

    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_SUCCEEDED, data));
  } catch (error) {
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_FAILED));
  }
};

export const logOut = () => createAction(USER_ACTION_TYPES.USER_SIGN_OUT);
