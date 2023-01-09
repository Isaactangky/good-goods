import { useFormAction, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.scss";
import { fetchPostStartAsync } from "../../store/post/post.action";
import {
  selectIsLoadingPost,
  selectPost,
} from "../../store/post/post.selector";

import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.component";
import ProductInfo from "../../components/ProductInfo/ProductInfo.component";
import Spinner from "../../components/Spinner/Spinner.component";
const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingPost = useSelector(selectIsLoadingPost);
  const post = useSelector(selectPost);
  useEffect(() => {
    dispatch(fetchPostStartAsync(id));
  }, [id]);
  // Redirect for invalid post id
  useEffect(() => {
    if (!isLoadingPost && !post.title) navigate("/404");
  }, [post, isLoadingPost]);

  if (isLoadingPost) return <Spinner />;

  return (
    <div className={styles["container"]}>
      <ProductInfo
        title={post.title}
        description={post.description}
        category={post.category}
        images={post.images}
      />

      <ReviewsSection />
    </div>
  );
};

export default Post;
