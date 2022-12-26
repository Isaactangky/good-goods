import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import {
  AddReviewButton,
  StarRatingsContainer,
  Form,
} from "./add-review-form.styles";
import { createReviewStartAsync } from "../../store/posts/posts.action";
import { useParams } from "react-router-dom";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import FormRangeInput from "../form-range-input/form-range-input.component";
import StarRatings from "react-star-ratings";

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
  const changeRating = (newRating, name) => {
    setFormFields({
      ...formFields,
      rating: newRating,
    });
  };
  if (!isAuthenticated) {
    return <h5>Login to comment</h5>;
  }
  console.log(formFields);
  return (
    <Form onSubmit={createReview}>
      <StarRatingsContainer>
        <StarRatings
          rating={rating}
          starRatedColor="orangered"
          starHoverColor="orange"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="30px"
        />
      </StarRatingsContainer>

      <FormTextarea
        row="5"
        placeholder="What do you think"
        onChange={onChangeHandler}
        value={content}
        name="content"
        id="content"
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Comment</Button>
    </Form>
  );
};

export default AddReviewForm;
