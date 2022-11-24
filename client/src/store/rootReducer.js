import { combineReducers } from "redux";
import { postsReducer } from "./posts/posts.reducer";
import { userReducer } from "./user/user.reducer";
const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

export default rootReducer;
