import { useDispatch } from "react-redux";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { AddReviewButton } from "./add-review-form.styles";
const AddReviewForm = () => {
  const dispatch = useDispatch();
  const createReview = () => {
    dispatch(createReviewStartAsync);
  };
  return (
    <form onSubmit={createReview}>
      <Button buttonType={BUTTON_TYPES.OUTLINE}>Comment</Button>
    </form>
  );
};

export default AddReviewForm;
