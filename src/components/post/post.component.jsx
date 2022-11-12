import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../context/posts/posts.contex";
import styles from "./post.module.scss";
const Post = () => {
  const { id: paramsId } = useParams();
  const { posts } = useContext(PostsContext);
  const [post, setPost] = useState(posts.find((post) => post.id === paramsId));
  const { id: postId, name, imageUrl, description, category } = post;
  useEffect(() => {
    const targetPost = posts.find((post) => post.id === paramsId);
    setPost(targetPost);
  }, []);

  if (!paramsId || post === {}) return <h1>not found</h1>;
  return (
    <div className={styles["container"]}>
      <h1 className={styles.title}>{name}</h1>
      <p>{category}</p>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={`${name} image`} />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Post;
