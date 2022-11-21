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

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsStartAsync());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="new" element={<NewPost />} />

        <Route path="post/*" element={<PostsHome />} />
        <Route path="community" element={<h1>Community Route</h1>} />
      </Route>
    </Routes>
  );
}

export default App;