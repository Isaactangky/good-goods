import { POSTS_ACTION_TYPES } from "./posts.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
  category: "",
  isLoading: true,
};

export const postsReducer = (state = POSTS_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case POSTS_ACTION_TYPES.POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        posts: action.payload.posts,
        category: action.payload.category,
        isLoading: false,
      };

    case POSTS_ACTION_TYPES.FETCH_POSTS_FAILED:
      return {
        ...state,
        category: "",
        posts: [],
        isLoading: false,
      };
    default:
      return state;
  }
};
