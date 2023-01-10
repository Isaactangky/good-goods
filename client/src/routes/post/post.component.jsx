import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
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

import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.component";
import ProductInfo from "../../components/ProductInfo/ProductInfo.component";
import Spinner from "../../components/Spinner/Spinner.component";

const Post = () => {
  const { id } = useParams();
  const fetchRef = useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoadingPost = useSelector(selectIsLoadingPost);
  const post = useSelector(selectPost);

  const onDeleteHandler = async () => {
    await dispatch(deletePostStartAsync(id));
    navigate("/post");
  };
  const onEditHandler = () => {
    navigate(`/post/${id}/edit`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      await dispatch(fetchPostStartAsync(id));
      fetchRef.current = true;
    };
    fetchPost();
  }, [id, dispatch]);
  // Redirect for invalid post id
  useEffect(() => {
    if (!isLoadingPost && !post?.title) {
      if (fetchRef.current === false) return;
      navigate("/404");
    }
  }, [post, isLoadingPost, navigate]);

  if (isLoadingPost) return <Spinner />;
  return (
    <div className={styles["container"]}>
      <ProductInfo
        title={post.title}
        description={post.description}
        category={post.category}
        images={post.images}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
      />

      <ReviewsSection />
    </div>
  );
};

export default Post;
