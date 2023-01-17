import { createAction } from "../../utils/createAction.utils";
import { POST_ACTION_TYPES } from "./post.types";
import { setError } from "../alert/alert.action";
import axios from "axios";
import { tokenConfig } from "../user/user.action";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/post`;

export const fetchPostStartAsync = (id) => async (dispatch) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);
    dispatch(createAction(POST_ACTION_TYPES.FETCH_POST_SUCCEEDED, data));
    return data;
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response?.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};

export const createPostStartAsync = (newPost) => async (dispatch, getState) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    const config = tokenConfig(getState);
    config.headers["Content-Type"] = "multipart/form-data";

    const { data } = await axios.post(`${API_URL}`, newPost, config);

    dispatch(createAction(POST_ACTION_TYPES.CREATE_POST_SUCCEEDED, data));
    return data;
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response?.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};
// Delete a Post

export const deletePostStartAsync = (id) => async (dispatch, getState) => {
  dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
  try {
    await axios.delete(`${API_URL}/${id}`, tokenConfig(getState));
    dispatch(createAction(POST_ACTION_TYPES.DELETE_POST_SUCCEEDED, id));
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response?.status));
    dispatch(createAction(POST_ACTION_TYPES.POST_ACTION_FAILED));
  }
};

export const updatePostStartAsync =
  (id, formData) => async (dispatch, getState) => {
    dispatch(createAction(POST_ACTION_TYPES.POST_LOADING));
    try {
      const body = formData;
      const config = tokenConfig(getState);
      config.headers["Content-Type"] = "multipart/form-data";

      const { data } = await axios.put(`${API_URL}/${id}`, body, config);
      dispatch(createAction(POST_ACTION_TYPES.UPDATE_POST_SUCCEEDED, data));
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.toString();
      dispatch(setError(message, error.response?.status));
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
        `${API_URL}/${postId}/reviews`,
        body,
        tokenConfig(getState)
      );
      dispatch(createAction(POST_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED, data));
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.toString();
      dispatch(setError(message, error.response?.status));
      dispatch(createAction(POST_ACTION_TYPES.REVIEWS_ACTION_FAILED));
    }
  };

export const deleteReviewStartAsync =
  (postId, reviewId) => async (dispatch, getState) => {
    dispatch(createAction(POST_ACTION_TYPES.REVIEWS_LOADING));
    try {
      const { data } = await axios.delete(
        `${API_URL}/${postId}/reviews/${reviewId}`,
        tokenConfig(getState)
      );
      dispatch(
        createAction(POST_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED, reviewId)
      );
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.toString();
      dispatch(setError(message, error.response?.status));
      dispatch(createAction(POST_ACTION_TYPES.REVIEWS_ACTION_FAILED));
    }
  };

// Toggle like button
export const toggleLikeStartAsync = (postId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(
      `${API_URL}/${postId}/like`,
      {},
      tokenConfig(getState)
    );
    console.log(data);
    dispatch(createAction(POST_ACTION_TYPES.TOGGLE_LIKE_SUCCEDED, data));
    return data;
  } catch (error) {
    const message = error.response?.data?.message || error.toString();
    dispatch(setError(message, error.response?.status));
    // dispatch(createAction(POST_ACTION_TYPES.REVIEWS_ACTION_FAILED));
  }
};
