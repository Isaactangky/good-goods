export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectIsLoadingUser = (state) => state.user.isLoading;
