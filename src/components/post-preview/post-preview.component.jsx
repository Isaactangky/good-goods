import styles from "./post-preview.module.scss";
const PostPreview = ({ post }) => {
  const { name, imageUrl, review, category } = post;
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles["info-container"]}>
        <span className={styles.title}>{name}</span>
        <span className={styles.category}>{category}</span>
        <p className={styles.review}>{review.slice(0, 80)}</p>
      </div>
    </div>
  );
};

export default PostPreview;
