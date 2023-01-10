import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import { CATEGORIES } from "../../data";
import FormInput from "../FormInput/FormInput.component";
import FormSelect from "../form-select/form-select.component";
import { FileInputGroup, Form, Textarea } from "./NewPostForm.styles.js";
import { useNavigate } from "react-router-dom";
import { createPostStartAsync } from "../../store/post/post.action";
import { selectIsLoadingPost } from "../../store/post/post.selector";
const defaultFormFields = {
  title: "",
  category: "Food",
  description: "",
};

const NewPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [images, setImages] = useState(null);
  const { title, category, description } = formFields;
  const clearFormField = () => setFormFields(defaultFormFields);
  const isLoadingPost = useSelector(selectIsLoadingPost);
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
    for (let i = 0; i < images.length; i++) {
      console.log(images[i]);
      formData.append("images", images[i], images[i].name);
    }
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    // const newPost = { title, category, description };
    const data = await dispatch(createPostStartAsync(formData));
    clearFormField();
    navigate(`/post/${data._id}`);
  };

  return (
    <Form onSubmit={addNewPost}>
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
      <FileInputGroup>
        <label htmlFor="formFile" className={`file_label`}>
          Upload Images
        </label>
        <input
          className={`file_input`}
          type="file"
          id="formFile"
          name="images"
          onChange={onFileChangeHandler}
          required
          multiple
        />
      </FileInputGroup>

      <Textarea
        label="description"
        type="text"
        name="description"
        value={description}
        onChange={onChangeHandler}
        rows="10"
        required
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE} disabled={isLoadingPost}>
        Submit
      </Button>
    </Form>
  );
};

export default NewPostForm;
