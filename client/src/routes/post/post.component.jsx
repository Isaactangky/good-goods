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
import Button, { BUTTON_TYPES } from "../../components/button/button.component";
import Reviews from "../../components/reviews/reviews.component";
import ProductInfo from "../../components/ProductInfo/ProductInfo.component";
import Spinner from "../../components/Spinner/Spinner.component";
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
  if (isLoading) return <Spinner />;
  return (
    <div className={styles["container"]}>
      <ProductInfo
        title={post.title}
        description={post.description}
        category={post.category}
        images={post.images}
      />
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
