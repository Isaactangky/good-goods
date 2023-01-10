import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  updatePostStartAsync,
  fetchPostStartAsync,
} from "../../store/post/post.action";
import { selectPost } from "../../store/post/post.selector";
import { CATEGORIES } from "../../data";

import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import FormSelect from "../form-select/form-select.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import FormFileInput from "../FormFileInput/FormFileInput.component";
const EditPostForm = () => {
  // TODO authenticate user
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  console.log("post", post);
  const [formFields, setFormFields] = useState(post);
  const { title, category, description } = formFields;
  console.log(formFields);
  const [images, setImages] = useState(null);
  const onFileChangeHandler = (event) => {
    setImages(event.target.files);
  };
  useEffect(() => {
    (async () => {
      if (!post || post._id !== id) {
        await dispatch(fetchPostStartAsync(id));
        setFormFields((prev) => post);
        console.log("2");
      }
    })();
  }, [post, id, dispatch]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const newPost = { ...formFields };
    const data = await dispatch(updatePostStartAsync(id, newPost));
    navigate(`/post/${data._id}`);
  };

  return (
    <form onSubmit={updatePost}>
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
      <FormFileInput
        label="Upload Images"
        type="file"
        id="formFile"
        name="images"
        onChange={onFileChangeHandler}
        required
        multiple
      />

      <FormTextarea
        label="description"
        type="text"
        name="description"
        value={description}
        onChange={onChangeHandler}
        rows="10"
        required
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Submit</Button>
    </form>
  );
};

export default EditPostForm;
