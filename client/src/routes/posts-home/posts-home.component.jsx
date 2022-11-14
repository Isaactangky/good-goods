import { Routes, Route } from "react-router-dom";
import Post from "../../components/post/post.component";
import Posts from "../../components/posts/posts.component";
const PostsHome = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path=":id" element={<Post />} />
    </Routes>
  );
};
export default PostsHome;
