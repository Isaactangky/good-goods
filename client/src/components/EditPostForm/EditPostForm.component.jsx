import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import {
  updatePostStartAsync,
  fetchPostStartAsync,
} from "../../store/post/post.action";
import {
  selectIsLoadingPost,
  selectPost,
} from "../../store/post/post.selector";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { CATEGORIES } from "../../data";
import { ImagesContainer, ImageContainer } from "./EditPostForm.styles";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import FormSelect from "../FormSelect/FormSelect.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import FormFileInput from "../FormFileInput/FormFileInput.component";

const EditPostForm = () => {
  const { id } = useParams();
  useRedirectLoggedOutUser("/signin");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const isLoadingPost = useSelector(selectIsLoadingPost);
  const [formFields, setFormFields] = useState({
    title: post.title || "",
    category: post.category || "",
    description: post.description || "food",
  });
  const [deleteImages, setDeleteImages] = useState([]);
  const [images, setImages] = useState([]);

  const { title, category, description } = formFields;
  const onFileChangeHandler = (event) => {
    setImages(event.target.files);
  };

  useEffect(() => {
    (async () => {
      if (!post || post._id !== id) {
        const data = await dispatch(fetchPostStartAsync(id));
        setFormFields({
          title: data.title,
          category: data.category,
          description: data.description,
        });
      }
    })();
  }, [post, id, dispatch]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const updatePost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i], images[i].name);
    }

    formData.append("deleteImages", deleteImages);

    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);

    const data = await dispatch(updatePostStartAsync(id, formData));
    if (data._id) navigate(`/post/${data._id}`);
  };

  const onCheckHandler = (event) => {
    const filename = event.target.name;
    if (!event.target.checked) {
      setDeleteImages(deleteImages.filter((img) => img !== filename));
      return;
    }
    setDeleteImages([...deleteImages, filename]);
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
        multiple
      />
      {post.images && post.images.length ? (
        <ImagesContainer>
          {post.images.map((img, index) => {
            return (
              <ImageContainer key={index}>
                <img src={img.thumbnail} alt="thumbnail" />
                <div>
                  <input
                    type="checkbox"
                    name={img.filename}
                    id={`img-${index}`}
                    onChange={onCheckHandler}
                  />
                  <label htmlFor={`img-${index}`}>Delete</label>
                </div>
              </ImageContainer>
            );
          })}
        </ImagesContainer>
      ) : null}

      <FormTextarea
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
    </form>
  );
};

export default EditPostForm;
