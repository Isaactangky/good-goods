import { combineReducers } from "redux";
import { postsReducer } from "./posts/posts.reducer";
import { postReducer } from "./post/post.reducer";

import { userReducer } from "./user/user.reducer";
import { alertReducer } from "./alert/alert.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  user: userReducer,
  alert: alertReducer,
});

export default rootReducer;
