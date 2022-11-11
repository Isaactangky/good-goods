import { useState } from "react";
import Button, { BUTTON_TYPES } from "../button/button.component";

import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import styles from "./new-post-form.module.scss";
const defaultFormFields = {
  name: "",
  category: "Food",
  imageUrl: "",
  review: "",
};
const CATEGORIES = ["Food", "Beauty", "Clothing", "Health"];
const NewPostForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, category, imageUrl, review } = formFields;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <form className={styles["new-post-form"]}>
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
        label="review"
        type="text"
        name="review"
        value={review}
        onChange={onChangeHandler}
        required
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Submit</Button>
    </form>
  );
};

export default NewPostForm;
