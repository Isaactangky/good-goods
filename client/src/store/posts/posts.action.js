import { createAction } from "../../utils/createAction.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";
import { setError } from "../alert/alert.action";
import axios from "axios";
import history from "../../history";
import { tokenConfig } from "../user/user.action";

export const fetchPostsStartAsync = (category) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
  try {
    const endpoint = category
      ? `http://localhost:5000/api/post?category=${category}`
      : "http://localhost:5000/api/post";
    const res = await axios.get(endpoint);
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(
      setError(
        error?.response?.data || "Network Error",
        error?.response?.status || "Network Error"
      )
    );
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED));
  }
};
