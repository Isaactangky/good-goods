import { useContext } from "react";
import styles from "./home.module.scss";
import POSTS_DATA from "../../posts-data";
import PostPreview from "../../components/post-preview/post-preview.component";
import { PostsContext } from "../../context/posts/posts.contex";
const Home = () => {
  const { posts } = useContext(PostsContext);
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["posts-container"]}>
        <h2>Fresh Posts</h2>
        {posts.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
      <div className={styles["other-info-container"]}></div>
    </div>
  );
};
export default Home;
