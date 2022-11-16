import EditPostForm from "../../components/edit-post-form/edit-post-form.component";
import styles from "./edit-post.module.scss";
const EditPost = () => {
  return (
    <div className={styles["edit-post-container"]}>
      <h2>Edit product info</h2>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
