import { createAction } from "../../utils/createAction.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";
import axios from "axios";
import history from "../../history";
export const fetchPostsStartAsync = () => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_START));
  try {
    const res = await axios.get("http://localhost:5000/api/post");
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED, error));
  }
};

export const fetchPostStartAsync = (id) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POST_START));
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
    const id = data._id;
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_SUCCEEDED, data));
    history.push(`post/${id}`);
    // return data;
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_FAILED, error));
  }
};
// Delete a Post

export const deletePostStartAsync = (id) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.DELETE_POST_START));
  try {
    const { data } = await axios.delete(`http://localhost:5000/api/post/${id}`);
    dispatch(createAction(POSTS_ACTION_TYPES.DELETE_POST_SUCCEEDED, id));
    // history.push("/");
    return data.success;
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.DELETE_POST_FAILED, error));
  }
};

export const updatePostStartAsync = (id, formFields) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.UPDATE_POST_START));
  try {
    const { data } = await axios.put(
      `http://localhost:5000/api/post/${id}`,
      formFields
    );
    dispatch(createAction(POSTS_ACTION_TYPES.UPDATE_POST_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.UPDATE_POST_FAILED, error));
  }
};

// Create review

export const createReviewStartAsync = (postId, review) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.CREATE_REVIEW_START));
  try {
    const { data } = await axios.post(
      `http://localhost:5000/api/post/${postId}/reviews`,
      review
    );
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED, data));
    return data;
  } catch (error) {
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_REVIEW_FAILED, error));
  }
};

export const deleteReviewStartAsync =
  (postId, reviewId) => async (dispatch) => {
    console.log("action start");
    console.log(postId, reviewId);
    dispatch(createAction(POSTS_ACTION_TYPES.DELETE_REVIEW_START));
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/post/${postId}/reviews/${reviewId}`
      );
      dispatch(
        createAction(POSTS_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED, reviewId)
      );
      return data;
    } catch (error) {
      dispatch(createAction(POSTS_ACTION_TYPES.DELETE_REVIEW_FAILED, error));
    }
  };
