import { useFormAction, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.scss";
import {
  fetchPostStartAsync,
  deletePostStartAsync,
} from "../../store/post/post.action";
import {
  selectIsLoadingPost,
  selectPost,
} from "../../store/post/post.selector";

import Button, { BUTTON_TYPES } from "../../components/Button/Button.component";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.component";
import ProductInfo from "../../components/ProductInfo/ProductInfo.component";
import Spinner from "../../components/Spinner/Spinner.component";
const Post = () => {
  const { id } = useParams();
  const post = useSelector(selectPost);
  const isLoadingPost = useSelector(selectIsLoadingPost);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPostStartAsync(id));
  }, [id]);

  if (isLoadingPost) return <Spinner />;
  return (
    <div className={styles["container"]}>
      <ProductInfo
        title={post.title}
        description={post.description}
        category={post.category}
        images={post.images}
      />

      {post && <ReviewsSection />}
    </div>
  );
};

export default Post;
