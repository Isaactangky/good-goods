import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../form-input/form-input.component";
import FormSelect from "../form-select/form-select.component";
import { useNavigate, useParams } from "react-router-dom";
import {
  updatePostStartAsync,
  fetchPostStartAsync,
} from "../../store/post/post.action";
import { selectPost } from "../../store/post/post.selector";

const CATEGORIES = ["Food", "Beauty", "Clothing", "Health"];

const EditPostForm = () => {
  // TODO authenticate user
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  console.log("post", post);
  const [formFields, setFormFields] = useState(post);
  const { title, category, imageUrl, description } = formFields;
  console.log(formFields);
  useEffect(() => {
    (async () => {
      if (!post || post._id !== id) {
        await dispatch(fetchPostStartAsync(id));
        setFormFields((prev) => post);
        console.log("2");
      }
    })();
  }, []);

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

export default EditPostForm;
