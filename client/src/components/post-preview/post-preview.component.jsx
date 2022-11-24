import { Link } from "react-router-dom";
import styles from "./post-preview.module.scss";
const PostPreview = ({ post }) => {
  const { _id, title, imageUrl, description, category } = post;
  if (!description || !title) return;
  return (
    <Link to={`/post/${_id}`} className={styles["container"]}>
      {/* <div > */}
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles["info-container"]}>
        <span className={styles.title}>{title}</span>
        <span className={styles.category}>{category}</span>
        <p className={styles.description}>{description.slice(0, 80)}</p>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default PostPreview;
