import { combineReducers } from "redux";
import { postsReducer } from "./posts/posts.reducer";
import { userReducer } from "./user/user.reducer";
import { alertReducer } from "./alert/alert.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
  alert: alertReducer,
});

export default rootReducer;
