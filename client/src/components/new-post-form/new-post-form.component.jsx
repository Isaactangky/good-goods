import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import { CATEGORIES } from "../../config";
import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import styles from "./new-post-form.module.scss";
import { useNavigate, Navigate } from "react-router-dom";
import { createPostStartAsync } from "../../store/posts/posts.action";
import { selectIsAuthenticated } from "../../store/user/user.selector";

const defaultFormFields = {
  title: "",
  category: "Food",
  description: "",
};

const NewPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [images, setImages] = useState(null);
  const { title, category, description } = formFields;
  const clearFormField = () => setFormFields(defaultFormFields);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onFileChangeHandler = (event) => {
    setImages(event.target.files);
  };

  const addNewPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("images");
    console.log(images);
    for (let i = 0; i < images.length; i++) {
      console.log(images[i]);
      formData.append("images", images[i], images[i].name);
    }
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    // const newPost = { title, category, description };
    const newPost = { ...formFields, images };
    dispatch(createPostStartAsync(formData));
  };
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }
  return (
    <form
      className={styles["new-post-form"]}
      onSubmit={addNewPost}
      // encType="multipart/form-data"
    >
      <FormInput
        label="title"
        type="text"
        name="title"
        value={title}
        onChange={onChangeHandler}
        required
      />
      <FormSelect
        label="Category"
        options={CATEGORIES}
        name="category"
        value={category}
        onChange={onChangeHandler}
      />
      <div className={styles.file_input_group}>
        <label htmlFor="formFile" className={`form-label ${styles.file_label}`}>
          Upload Images
        </label>
        <input
          className={`form-control ${styles.file_input}`}
          type="file"
          id="formFile"
          name="images"
          onChange={onFileChangeHandler}
          required
          multiple
        />
      </div>

      <FormInput
        label="description"
        type="text"
        name="description"
        value={description}
        onChange={onChangeHandler}
        required
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Submit</Button>
    </form>
  );
};

export default NewPostForm;
