import { useFormAction, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.scss";
import {
  fetchPostStartAsync,
  deletePostStartAsync,
} from "../../store/posts/posts.action";
import { selectIsLoading, selectPost } from "../../store/posts/posts.selector";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/user/user.selector";
import Button, { BUTTON_TYPES } from "../button/button.component";
import Reviews from "../reviews/reviews.component";

const Post = () => {
  const { id } = useParams();
  const post = useSelector(selectPost);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPostStartAsync(id));
  }, []);
  const onDeleteHandler = async () => {
    const res = await dispatch(deletePostStartAsync(id));
    if (res) navigate("/");
  };
  const onEditHandler = () => {
    navigate(`/post/${id}/edit`);
  };
  if (isLoading) return <h1>not found</h1>;
  return (
    <div className={styles["container"]}>
      <h1 className={styles.title}>{post.title}</h1>
      <p>{post.category}</p>
      <div className={styles["image-container"]}>
        <img src={post.imageUrl} alt={`${post.title} image`} />
      </div>
      <p>{post.description}</p>
      {isAuthenticated && post.author && user._id === post.author._id ? (
        <div className={styles["button-container"]}>
          <Button onClick={onEditHandler} buttonType={BUTTON_TYPES.OUTLINE}>
            Edit
          </Button>
          <Button onClick={onDeleteHandler}>Delete</Button>
        </div>
      ) : null}
      {post && <Reviews reviews={post.reviews} />}
    </div>
  );
};

export default Post;
