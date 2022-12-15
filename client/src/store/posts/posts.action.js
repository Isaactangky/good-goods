import { createAction } from "../../utils/createAction.utils";
import { POSTS_ACTION_TYPES } from "./posts.types";
import { ERROR_IDS } from "../error/error.type";
import { setError } from "../error/error.action";
import axios from "axios";
import history from "../../history";
import { tokenConfig } from "../user/user.action";

export const fetchPostsStartAsync = () => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
  try {
    const res = await axios.get("http://localhost:5000/api/post");
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(
      setError(
        error.response.data,
        error.response.status,
        ERROR_IDS.FETCH_POSTS_ERROR
      )
    );
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POSTS_FAILED));
  }
};

export const fetchPostStartAsync = (id) => async (dispatch) => {
  dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
  try {
    const res = await axios.get(`http://localhost:5000/api/post/${id}`);
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POST_SUCCEEDED, res.data));
  } catch (error) {
    dispatch(
      setError(
        error.response.data,
        error.response.status,
        ERROR_IDS.FETCH_POST_ERROR
      )
    );
    dispatch(createAction(POSTS_ACTION_TYPES.FETCH_POST_FAILED));
  }
};

export const createPostStart = (newPost) => async (dispatch, getState) => {
  console.log("new post");
  console.log(newPost);
  dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
  try {
    const config = tokenConfig(getState);
    config.headers["Content-Type"] = "multipart/form-data";
    // config.headers["Content-Type"] = undefined;

    const { data } = await axios.post(
      `http://localhost:5000/api/post`,
      newPost,
      config
    );
    // // const id = data._id;
    console.log(data);
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_SUCCEEDED, data));
    // history.push(`post/${id}`);
    // return data;
  } catch (error) {
    console.log(error);
    // dispatch(
    //   setError(
    //     error.response.data,
    //     error.response.status,
    //     ERROR_IDS.CREATE_POST_ERROR
    //   )
    // );
    dispatch(createAction(POSTS_ACTION_TYPES.CREATE_POST_FAILED));
  }
};
// Delete a Post

export const deletePostStartAsync = (id) => async (dispatch, getState) => {
  dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/post/${id}`,
      tokenConfig(getState)
    );
    dispatch(createAction(POSTS_ACTION_TYPES.DELETE_POST_SUCCEEDED, id));
    // history.push("/");
    // return data.success;
  } catch (error) {
    dispatch(
      setError(
        error.response.data,
        error.response.status,
        ERROR_IDS.DELETE_POST_ERROR
      )
    );
    dispatch(createAction(POSTS_ACTION_TYPES.DELETE_POST_FAILED));
  }
};

export const updatePostStartAsync =
  (id, formFields) => async (dispatch, getState) => {
    dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
    try {
      const body = formFields;
      const { data } = await axios.put(
        `http://localhost:5000/api/post/${id}`,
        body,
        tokenConfig(getState)
      );
      dispatch(createAction(POSTS_ACTION_TYPES.UPDATE_POST_SUCCEEDED, data));
      return data;
    } catch (error) {
      dispatch(
        setError(
          error.response.data,
          error.response.status,
          ERROR_IDS.UPDATE_POST_ERROR
        )
      );
      dispatch(createAction(POSTS_ACTION_TYPES.UPDATE_POST_FAILED));
    }
  };

// Create review

export const createReviewStartAsync =
  (postId, review) => async (dispatch, getState) => {
    dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
    try {
      const body = review;
      const { data } = await axios.post(
        `http://localhost:5000/api/post/${postId}/reviews`,
        body,
        tokenConfig(getState)
      );
      dispatch(createAction(POSTS_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED, data));
      return data;
    } catch (error) {
      dispatch(
        setError(
          error.response.data,
          error.response.status,
          ERROR_IDS.CREATE_REVIEW_ERROR
        )
      );
      dispatch(createAction(POSTS_ACTION_TYPES.CREATE_REVIEW_FAILED));
    }
  };

export const deleteReviewStartAsync =
  (postId, reviewId) => async (dispatch, getState) => {
    dispatch(createAction(POSTS_ACTION_TYPES.POSTS_LOADING));
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/post/${postId}/reviews/${reviewId}`,
        tokenConfig(getState)
      );
      dispatch(
        createAction(POSTS_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED, reviewId)
      );
      return data;
    } catch (error) {
      dispatch(
        setError(
          error.response.data,
          error.response.status,
          ERROR_IDS.DELETE_REIVEW_ERROR
        )
      );
      dispatch(createAction(POSTS_ACTION_TYPES.DELETE_REVIEW_FAILED, error));
    }
  };
