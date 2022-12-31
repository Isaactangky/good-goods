import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/createAction.utils";
import { setError, setSucessAlert } from "../alert/alert.action";

import axios from "axios";
axios.defaults.withCredentials = true;
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
    const { data } = await axios.post(
      `http://localhost:5000/auth/user/register`,
      info
    );

    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_UP_SUCCEEDED, data));
    dispatch(setSucessAlert(`Successfully signed up as ${data.user.username}`));
    return data;
  } catch (error) {
    dispatch(setError(error.response.data, error.response.status));
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
    const { data } = await axios.post(
      `http://localhost:5000/auth/user/login`,
      body,
      config
    );
    dispatch(setSucessAlert(`Wellcome back! ${data.user.username}`));
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED, data));
  } catch (error) {
    dispatch(setError(error.response.data.message, error.response.status));
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error));
  }
};

export const fetchAuthStatusStartAsync = () => async (dispatch, getState) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const config = tokenConfig(getState);
    const { data } = await axios.get(`http://localhost:5000/auth/user`, config);

    dispatch(setSucessAlert(`Wellcome back! ${data.user.username}`));
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_STATUS, data));
  } catch (error) {
    // dispatch(setError(error.response.data.message, error.response.status));
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_ERROR));
  }
};

export const logOut = () => createAction(USER_ACTION_TYPES.USER_SIGN_OUT);
