import Posts from "../../components/posts/posts.component";
import Post from "../../components/post/post.component";
import EditPost from "../edit-post/edit-post.component";
import { Routes, Route } from "react-router-dom";
const Explore = () => {
  // const posts = useSelector(selectPosts);
  return (
    <Routes>
      <Route index element={<Posts />} />
      <Route path=":id" element={<Post />} />
      <Route path=":id/edit" element={<EditPost />} />
    </Routes>
  );
};
export default Explore;
