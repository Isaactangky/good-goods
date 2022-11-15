import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Navigation from "./routes/navigationRoute/navigation.component";
import Home from "./routes/homeRoute/home.component";
import NewPost from "./routes/newpostRoute/new-post.component";
import PostsHome from "./routes/posts-home/posts-home.component";
import Posts from "./components/posts/posts.component";
function App() {
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
