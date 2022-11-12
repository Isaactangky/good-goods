import { Link } from "react-router-dom";
import styles from "./post-preview.module.scss";
const PostPreview = ({ post }) => {
  const { id, name, imageUrl, description, category } = post;
  return (
    <Link to={`/post/${id}`} className={styles["container"]}>
      {/* <div > */}
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles["info-container"]}>
        <span className={styles.title}>{name}</span>
        <span className={styles.category}>{category}</span>
        <p className={styles.description}>{description.slice(0, 80)}</p>
      </div>
      {/* </div> */}
    </Link>
  );
};

export default PostPreview;
