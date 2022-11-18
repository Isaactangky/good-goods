import { useFormAction, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./post.module.scss";
import {
  fetchPostStartAsync,
  deletePostStartAsync,
} from "../../store/posts/posts.action";
import { selectPost } from "../../store/posts/posts.selector";
import Button, { BUTTON_TYPES } from "../button/button.component";
import Reviews from "../reviews/reviews.component";
const reviews = [
  {
    _id: 12344,
    rating: 3,
    userName: "Jack",
    content: "I dont like it",
    date: "Jan 2010",
  },
];

const Post = () => {
  const { id } = useParams();
  // const [post, setPost] = useState({});
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!post || post._id !== id) dispatch(fetchPostStartAsync(id));
  }, []);
  const onDeleteHandler = async () => {
    const res = await dispatch(deletePostStartAsync(id));
    if (res) navigate("/");
  };
  const onEditHandler = () => {
    navigate(`/post/${id}/edit`);
  };
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
        <Button onClick={onEditHandler} buttonType={BUTTON_TYPES.OUTLINE}>
          Edit
        </Button>
        <Button onClick={onDeleteHandler}>Delete</Button>
      </div>
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Post;
