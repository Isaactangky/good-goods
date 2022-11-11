import styles from "./home.module.scss";
import POSTS_DATA from "../../posts-data";
import PostPreview from "../../components/post-preview/post-preview.component";
const Home = () => {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["posts-container"]}>
        <h2>Fresh Posts</h2>
        {POSTS_DATA.map((post) => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>
      <div className={styles["other-info-container"]}></div>
    </div>
  );
};
export default Home;
