import { combineReducers } from "redux";
import { postsReducer } from "./posts/posts.reducer";
import { userReducer } from "./user/user.reducer";
import { errorReducer } from "./error/error.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  error: errorReducer,
});

export default rootReducer;
