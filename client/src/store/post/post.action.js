import { createAction } from "../../utils/createAction.utils";
import { POST_ACTION_TYPES } from "./post.types";
import { setError } from "../alert/alert.action";
import axios from "axios";
import history from "../../history";
import { tokenConfig } from "../user/user.action";

export const fetchPostStartAsync = (id) => async (dispatch) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    const res = await axios.get(`http://localhost:5000/api/post/${id}`);
    dispatch(createAction(POST_ACTION_TYPES.FETCH_POST_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(setError(error.response.data, error.response.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};

export const createPostStartAsync = (newPost) => async (dispatch, getState) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    const config = tokenConfig(getState);
    config.headers["Content-Type"] = "multipart/form-data";

    const { data } = await axios.post(
      `http://localhost:5000/api/post`,
      newPost,
      config
    );

    dispatch(createAction(POST_ACTION_TYPES.CREATE_POST_SUCCEEDED, data));
    return data;
  } catch (error) {
    console.log(error);
    dispatch(setError(error.response.data, error.response.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};
// Delete a Post

export const deletePostStartAsync = (id) => async (dispatch, getState) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/post/${id}`,
      tokenConfig(getState)
    );
    dispatch(createAction(POST_ACTION_TYPES.DELETE_POST_SUCCEEDED, id));
    // history.push("/");
    // return data.success;
  } catch (error) {
    dispatch(setError(error.response.data, error.response.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};

export const updatePostStartAsync =
  (id, formFields) => async (dispatch, getState) => {
    dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
    try {
      const body = formFields;
      const { data } = await axios.put(
        `http://localhost:5000/api/post/${id}`,
        body,
        tokenConfig(getState)
      );
      dispatch(createAction(POST_ACTION_TYPES.UPDATE_POST_SUCCEEDED, data));
      return data;
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
      dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
    }
  };

// Create review

export const createReviewStartAsync =
  (postId, review) => async (dispatch, getState) => {
    dispatch(createAction(POST_ACTION_TYPES.REVIEWS_LOADING));
    try {
      const body = review;
      const { data } = await axios.post(
        `http://localhost:5000/api/post/${postId}/reviews`,
        body,
        tokenConfig(getState)
      );
      dispatch(createAction(POST_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED, data));
      return data;
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
      dispatch(createAction(POST_ACTION_TYPES.REVIEWS_ACTION_FAILED));
    }
  };

export const deleteReviewStartAsync =
  (postId, reviewId) => async (dispatch, getState) => {
    dispatch(createAction(POST_ACTION_TYPES.REVIEWS_LOADING));
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/post/${postId}/reviews/${reviewId}`,
        tokenConfig(getState)
      );
      dispatch(
        createAction(POST_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED, reviewId)
      );
      return data;
    } catch (error) {
      dispatch(setError(error.response.data, error.response.status));
      dispatch(createAction(POST_ACTION_TYPES.REVIEWS_ACTION_FAILED));
    }
  };
