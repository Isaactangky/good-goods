import { useFormAction, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.scss";
import axios from "axios";
import { fetchPostStart } from "../../store/posts/posts.action";
import { selectPost } from "../../store/posts/posts.selector";
import Button, { BUTTON_TYPES } from "../button/button.component";
const Post = () => {
  const { id } = useParams();
  // const [post, setPost] = useState({});
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostStart(id));
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
      <div className={styles["button-container"]}>
        <Button buttonType={BUTTON_TYPES.OUTLINE}>Edit</Button>
        <Button>Delete</Button>
      </div>
    </div>
  );
};

export default Post;
