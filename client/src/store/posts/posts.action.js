import { createAction } from "../../utils/createAction.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";
import history from "../../routes/history";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
export const fetchPostsStart = () => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START));
  try {
    const res = await axios.get("http://localhost:5000/api/post");
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, error));
  }
};

export const fetchPostStart = (id) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START));
  try {
    const res = await axios.get(`http://localhost:5000/api/post/${id}`);
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POST_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POST_FAILED, error));
  }
};

export const createPostStart = (newPost) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_START));
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/post`,
      newPost
    );

    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_FAILED, error));
  }
};
