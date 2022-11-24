import { USER_ACTION_TYPES } from "./user.types";
import axios from "axios";
import { createAction } from "../../utils/createAction.utils";
export const userRegisterStartAsync = (info) => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_START));
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/auth/user/register`,
      info
    );
    dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(createAction(USER_ACTION_TYPES.USER_REGISTER_FAILED, error));
  }
};
const info = {
  username: "amy123",
  password: "amy123",
  email: "amy123@email.com",
};
export const signInStartAsync = () => async (dispatch) => {
  dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_START));
  try {
    const { data } = await axios.post(
      `http://localhost:5000/auth/user/login`,
      info
    );
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCEEDED, data.user));
    return data;
  } catch (error) {
    dispatch(createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error));
  }
};

export const fetchAuthStatus = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/auth/user`);
    console.log("data", data);
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_STATUS, data.user));
  } catch (error) {
    dispatch(createAction(USER_ACTION_TYPES.FETCH_AUTH_STATUS, null));
  }

  // if (data.success) {
  // }
};
