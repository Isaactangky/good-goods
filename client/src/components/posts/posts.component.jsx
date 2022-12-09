import styles from "./posts.module.scss";
import PostPreview from "../post-preview/post-preview.component";
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/posts/posts.selector";

const Posts = () => {
  // return <h1>This is Posts route</h1>;
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

export default Posts;
