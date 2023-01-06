export const selectPost = (state) => state.post.post;
export const selectReviews = (state) => state.post.post.reviews;
export const selectIsLoadingPost = (state) => state.post.isLoading;
export const selectIsLoadingReviews = (state) => state.post.isLoadingReviews;
