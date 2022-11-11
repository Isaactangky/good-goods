import NewPostForm from "../../components/new-post-form/new-post-form.component";
import styles from "./new-post.module.scss";
const NewPost = () => {
  return (
    <div className={styles.new_post_container}>
      <h2>Share you product</h2>
      <NewPostForm />
    </div>
  );
};

export default NewPost;
