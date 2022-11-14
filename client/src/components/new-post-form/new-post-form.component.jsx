import { useState, useContext } from "react";
import { PostsContext } from "../../context/posts/posts.contex";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import styles from "./new-post-form.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  title: "",
  category: "Food",
  imageUrl: "",
  description: "",
};

const CATEGORIES = ["Food", "Beauty", "Clothing", "Health"];

const NewPostForm = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostsContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, category, imageUrl, description } = formFields;
  const clearFormField = () => setFormFields(defaultFormFields);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const addNewPost = async (e) => {
    e.preventDefault();
    const newPost = { ...formFields };
    try {
      const res = await axios.post("http://localhost:5000/api/post", newPost);
      const { _id } = res.data;
      addPost(res.data);
      clearFormField();
      navigate(`/post/${_id}`);
    } catch (error) {
      console.log(error);
    }
    // console.log(newPost);
  };
  return (
    <form className={styles["new-post-form"]} onSubmit={addNewPost}>
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
