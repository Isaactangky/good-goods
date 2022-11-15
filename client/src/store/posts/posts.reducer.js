import { POSTS_ACTION_TYPES } from "./posts.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
  post: {},
  isLoading: false,
  error: null,
};

export const postsReducer = (state = POSTS_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case POSTS_ACTION_TYPES.FETCH_POSTS_START:
    case POSTS_ACTION_TYPES.FETCH_POST_START:
    case POSTS_ACTION_TYPES.CREATE_POST_START:
      return {
        ...state,
        isLoading: true,
      };
    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.FETCH_POST_SUCCEEDED:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.CREATE_POST_SUCCEEDED:
      return {
        ...state,
        post: action.payload,
      };

    case POSTS_ACTION_TYPES.FETCH_POST_FAILED:
    case POSTS_ACTION_TYPES.FETCH_POST_FAILED:
    case POSTS_ACTION_TYPES.CREATE_POST_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
