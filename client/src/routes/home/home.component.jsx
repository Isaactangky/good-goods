import { useSelector } from "react-redux";
import styles from "./home.module.scss";
import PostPreview from "../../components/post-preview/post-preview.component";
import { selectPosts } from "../../store/posts/posts.selector";
const Home = () => {
  const posts = useSelector(selectPosts);
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
