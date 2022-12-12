import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/createAction.utils";
import { setError } from "../error/error.action";

import axios from "axios";
axios.defaults.withCredentials = true;
//setup config/headers

export const tokenConfig = (getState) => {
  const token = getState().user.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) config.headers["x-auth-token"] = token;
  return config;
};
export const userRegisterStartAsync = (info) => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const { data } = await axios.post(
      `http://localhost:5000/auth/user/register`,
      info
    );
    console.log("register data");
    console.log(data);
    dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(
      setError(error.response.data, error.response.status, "REGISTER_ERROR")
    );
    dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_FAILED));
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
    console.log(data.user);
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(
      setError(error.response.data, error.response.status, "LOGIN_ERROR")
    );
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error));
  }
};

export const fetchAuthStatusAsync = () => async (dispatch, getState) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_LOADING));
  try {
    const { data } = await axios.get(
      `http://localhost:5000/auth/user`,
      tokenConfig(getState)
    );
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_STATUS, data));
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data, error.response.status));
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_ERROR));
  }
};

export const logOut = () => createAction(USER_ACTION_TYPES.USER_LOGOUT);
