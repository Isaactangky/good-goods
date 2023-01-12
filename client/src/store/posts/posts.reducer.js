import { POSTS_ACTION_TYPES } from "./posts.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
  page: 1,
  totalPages: 1,
  category: "",
  isLoading: true,
  isLoadingMore: false,
};

export const postsReducer = (state = POSTS_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case POSTS_ACTION_TYPES.POSTS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case POSTS_ACTION_TYPES.POSTS_LOAD_MORE:
      return {
        ...state,
        isLoadingMore: true,
      };
    case POSTS_ACTION_TYPES.POSTS_RESET:
      return {
        ...state,
        ...POSTS_INITIAL_STATE,
      };

    case POSTS_ACTION_TYPES.FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        posts: !action.payload.posts
          ? []
          : parseInt(action.payload.page) > 1
          ? [...state.posts, ...action.payload.posts]
          : [...action.payload.posts],
        page: parseInt(action.payload.page),
        totalPages: parseInt(action.payload.totalPages),
        isLoadingMore: false,
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
