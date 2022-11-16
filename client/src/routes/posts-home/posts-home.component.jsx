import { Routes, Route } from "react-router-dom";
import Post from "../../components/post/post.component";
import Posts from "../../components/posts/posts.component";
import EditPost from "../edit-post/edit-post.component";
const PostsHome = () => {
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path=":id" element={<Post />} />
      <Route path=":id/edit" element={<EditPost />} />
    </Routes>
  );
};
export default PostsHome;
