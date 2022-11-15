export const selectPosts = (state) => state.posts.posts;
export const selectPost = (state) => {
  console.log("select post");
  return state.posts.post;
};
export const selectIsLoading = (state) => state.posts.isLoading;
