import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./post.module.scss";
import axios from "axios";
const Post = () => {
  const { id: paramsId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/${paramsId}`
        );
        setPost(res.data);

        // setPost(targetPost);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, []);

  // if (!paramsId || post === {}) return <h1>not found</h1>;
  return (
    <div className={styles["container"]}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.category}</p>
      <div className={styles["image-container"]}>
        <img src={post.imageUrl} alt={`${post.title} image`} />
      </div>
      <p>{post.description}</p>
    </div>
  );
};

export default Post;
