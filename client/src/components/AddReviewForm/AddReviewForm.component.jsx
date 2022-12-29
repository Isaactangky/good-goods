import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import { AddReviewButton, Container, Form } from "./AddReviewForm.styles";
import { createReviewStartAsync } from "../../store/post/post.action";
import { useParams, Link } from "react-router-dom";
import FormTextarea from "../FormTextarea/FormTextarea.component";
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
  const [isDisplay, setIsDisplay] = useState(false);
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
    return (
      <Link to="/auth">
        <h4>Sign in to add reviews</h4>
      </Link>
    );
  }
  return (
    <Form onSubmit={createReview}>
      <FormTextarea
        row="10"
        placeholder="What do you think"
        onChange={onChangeHandler}
        value={content}
        name="content"
        id="content"
        onFocus={() => setIsDisplay(true)}
      />
      <Container isDisplay={isDisplay}>
        <StarRatings
          rating={rating}
          starRatedColor="orangered"
          starHoverColor="orange"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="3px"
        />
        <Button buttonType={BUTTON_TYPES.OUTLINE}>Comment</Button>
      </Container>
    </Form>
  );
};

export default AddReviewForm;
