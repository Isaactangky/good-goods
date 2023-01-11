import { POST_ACTION_TYPES } from "./post.types";

export const POSTS_INITIAL_STATE = {
  post: { reviews: [] },
  isLoading: false,
  isLoadingReviews: false,
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

export const postReducer = (state = POSTS_INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case POST_ACTION_TYPES.POST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case POST_ACTION_TYPES.REVIEWS_LOADING:
      return {
        ...state,
        isLoadingReviews: true,
      };
    case POST_ACTION_TYPES.FETCH_POST_SUCCEEDED:
    case POST_ACTION_TYPES.CREATE_POST_SUCCEEDED:
    case POST_ACTION_TYPES.UPDATE_POST_SUCCEEDED:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };

    case POST_ACTION_TYPES.DELETE_POST_SUCCEEDED:
      return {
        ...state,
        post: POSTS_INITIAL_STATE.post,
        isLoading: false,
      };
    case POST_ACTION_TYPES.CREATE_REVIEW_SUCCEEDED:
      return {
        ...state,
        post: AddReview(state.post, action.payload),
        isLoadingReviews: false,
      };
    case POST_ACTION_TYPES.DELETE_REVIEW_SUCCEEDED:
      return {
        ...state,
        post: deleteReview(state.post, action.payload),
        isLoadingReviews: false,
      };
    case POST_ACTION_TYPES.REVIEWS_ACTION_FAILED:
      return {
        ...state,
        isLoadingReviews: false,
      };
    case POST_ACTION_TYPES.POST_ACTION_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
