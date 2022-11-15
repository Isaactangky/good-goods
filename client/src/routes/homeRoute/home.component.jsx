import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.scss";
import PostPreview from "../../components/post-preview/post-preview.component";
// import { PostsContext } from "../../context/posts/posts.contex";
import { fetchPostsStart } from "../../store/posts/posts.action";
import { selectPosts } from "../../store/posts/posts.selector";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsStart());
  }, []);
  const posts = useSelector(selectPosts);
  // const posts = useSelector(selectPosts);
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["posts-container"]}>
        <h2>Fresh Posts</h2>
        {posts.map((post) => (
          <PostPreview key={post._id} post={post} />
        ))}
      </div>
      <div className={styles["other-info-container"]}></div>
    </div>
  );
};
export default Home;
