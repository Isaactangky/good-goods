import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostsContext } from "../../context/posts/posts.contex";
import Button, { BUTTON_TYPES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import styles from "./new-post-form.module.scss";
import { useNavigate } from "react-router-dom";
import {
  createPostStart,
  createPostReset,
} from "../../store/posts/posts.action";
import {
  selectIsSucceeded,
  selectPost,
} from "../../store/posts/posts.selector";
const defaultFormFields = {
  title: "",
  category: "Food",
  imageUrl: "",
  description: "",
};

const CATEGORIES = ["Food", "Beauty", "Clothing", "Health"];

const NewPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const { _id } = await dispatch(createPostStart(newPost));
    navigate(`/post/${_id}`);
    // clearFormField();

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
