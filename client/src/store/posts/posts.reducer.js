import { POSTS_ACTION_TYPES } from "./posts.types";

export const POSTS_INITIAL_STATE = {
  posts: [],
  post: {},
  isLoading: false,
};
const removePostFromPosts = (posts, removedPostId) => {
  return posts.filter((post) => post._id !== removedPostId);
};
const updatePostsAfterUpdatePost = (posts, newPost) => {
  return posts.reduce((acc, cur) => {
    if (cur._id === newPost._id) return [...acc, newPost];
    return [...acc, cur];
  }, []);
};
const AddReview = (post, newReview) => {
  return {
    ...post,
    reviews: [newReview, ...post.reviews],
  };
};
const deleteReview = (post, deletedReviewId) => {
  return {
    ...post,
    reviews: post.reviews.filter((review) => review._id !== deletedReviewId),
  };
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
        posts: [action.payload, ...state.posts],
        post: action.payload,
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.DELETE_POST_SUCCEEDED:
      return {
        ...state,
        posts: removePostFromPosts(state.posts, action.payload),
        // post: null,
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.UPDATE_POST_SUCCEEDED:
      return {
        ...state,
        posts: updatePostsAfterUpdatePost(state.posts, action.payload),
        post: action.payload,
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED:
      return {
        ...state,
        post: AddReview(state.post, action.payload),
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED:
      return {
        ...state,
        post: deleteReview(state.post, action.payload),
        isLoading: false,
      };
    case POSTS_ACTION_TYPES.FETCH_POST_FAILED:
    case POSTS_ACTION_TYPES.FETCH_POST_FAILED:
    case POSTS_ACTION_TYPES.CREATE_POST_FAILED:
    case POSTS_ACTION_TYPES.DELETE_POST_FAILED:
    case POSTS_ACTION_TYPES.UPDATE_POST_FAILED:
    case POSTS_ACTION_TYPES.CREATE_REVIEW_FAILED:
    case POSTS_ACTION_TYPES.DELETE_REVIEW_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
