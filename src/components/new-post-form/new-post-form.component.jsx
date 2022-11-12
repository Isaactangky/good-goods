import { useState, useContext } from "react";
import { PostsContext } from "../../context/posts/posts.contex";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import styles from "./new-post-form.module.scss";
import { v4 as uuid } from "uuid";
const defaultFormFields = {
  name: "",
  category: "Food",
  imageUrl: "",
  description: "",
};

const CATEGORIES = ["Food", "Beauty", "Clothing", "Health"];

const NewPostForm = () => {
  const { addPost } = useContext(PostsContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, category, imageUrl, description } = formFields;
  const clearFormField = () => setFormFields(defaultFormFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...formFields, id: uuid() };
    console.log(newPost);
    addPost(newPost);
    clearFormField();
  };
  return (
    <form className={styles["new-post-form"]} onSubmit={addNewPost}>
      <FormInput
        label="name"
        type="text"
        name="name"
        value={name}
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
      <FormInput
        label="image url"
        type="text"
        name="imageUrl"
        value={imageUrl}
        onChange={onChangeHandler}
        required
      />
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
