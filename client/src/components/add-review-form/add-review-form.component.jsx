import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { AddReviewButton } from "./add-review-form.styles";
import { createReviewStartAsync } from "../../store/posts/posts.action";
import { useParams } from "react-router-dom";
import FormTextarea from "../form-textarea/form-textarea.component";
import FormRangeInput from "../form-range-input/form-range-input.component";
import { selectIsAuthenticated } from "../../store/user/user.selector";
const defaultFormFields = {
  rating: 1,
  content: "",
};
const AddReviewForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { rating, content } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);
  const createReview = (e) => {
    e.preventDefault();
    // console.log(formFields);
    dispatch(createReviewStartAsync(id, formFields));
    resetFormFields();
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields((state) => ({
      ...state,
      [name]: value,
    }));
  };
  if (!isAuthenticated) {
    return <h5>Login to comment</h5>;
  }
  return (
    <form onSubmit={createReview}>
      <FormRangeInput
        type="range"
        name="rating"
        id="rating"
        min="1"
        max="5"
        onChange={onChangeHandler}
        value={rating}
      />
      <FormTextarea
        row="3"
        placeholder="What do you think"
        onChange={onChangeHandler}
        value={content}
        name="content"
        id="content"
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Comment</Button>
    </form>
  );
};

export default AddReviewForm;
