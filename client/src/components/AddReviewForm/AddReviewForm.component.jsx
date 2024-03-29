import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import { Container, Form, ReviewFormTextarea } from "./AddReviewForm.styles";
import { createReviewStartAsync } from "../../store/post/post.action";
import { useParams, Link, useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";

import { selectIsAuthenticated } from "../../store/user/user.selector";
import { selectIsLoadingReviews } from "../../store/post/post.selector";
const defaultFormFields = {
  rating: 1,
  content: "",
};
const AddReviewForm = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoadingReviews = useSelector(selectIsLoadingReviews);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isDisplay, setIsDisplay] = useState(false);
  const { rating, content } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);
  const createReview = (e) => {
    e.preventDefault();
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
      <Link to="/signin" state={{ prev: location }}>
        <h4>Sign in to add reviews</h4>
      </Link>
    );
  }
  return (
    <Form onSubmit={createReview}>
      <ReviewFormTextarea
        placeholder="What do you think"
        onChange={onChangeHandler}
        value={content}
        name="content"
        id="content"
        rows={isDisplay ? "2" : "1"}
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
          starSpacing="2px"
        />
        <Button buttonType={BUTTON_TYPES.OUTLINE} disabled={isLoadingReviews}>
          Comment
        </Button>
      </Container>
    </Form>
  );
};

export default AddReviewForm;
