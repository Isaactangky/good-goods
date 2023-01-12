import { createAction } from "../../utils/createAction.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";
import { setError } from "../alert/alert.action";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/post`;

export const fetchPostsStartAsync =
  (category, page = 1) =>
  async (dispatch) => {
    dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
    try {
      const endpoint = category
        ? `${API_URL}?category=${category}&page=${page}`
        : `${API_URL}?page=${page}`;
      console.log(endpoint);
      const res = await axios.get(endpoint);
      console.log("res");
      console.log(res);
      dispatch(
        createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED, res.data)
      );
    } catch (error) {
      console.log(error);
      const message = error.stack || error.toString();
      dispatch(setError(message, error.response?.status));
      dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED));
    }
  };

export const loadMorePosts = () =>
  createAction(POSTS_ACTION_TYPES.POSTS_LOAD_MORE);

export const postsReset = () => createAction(POSTS_ACTION_TYPES.POSTS_RESET);
