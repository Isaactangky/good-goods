import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.scss";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import NewPost from "./routes/new-post/new-post.component";
import PostsHome from "./routes/posts-home/posts-home.component";
import Posts from "./components/posts/posts.component";
import { fetchPostsStartAsync } from "./store/posts/posts.action";
import { fetchAuthStatus } from "./store/user/user.action";
import Authentication from "./routes/authentication/authentication.component";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsStartAsync());
  }, []);
  useEffect(() => {
    dispatch(fetchAuthStatus());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="new" element={<NewPost />} />

        <Route path="post/*" element={<PostsHome />} />
        <Route path="community" element={<h1>Community Route</h1>} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
