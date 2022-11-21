import {
  UserName,
  ReviewContainer,
  Content,
  Date,
  Rating,
  FunctionalityContainer,
  FunctionalityButton,
  InfoContainer,
} from "./review.styles";
import { formatDate } from "../../utils/formatDate.utils";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReviewStartAsync } from "../../store/posts/posts.action";
const Review = ({ review: { _id, author, date, content, rating } }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const deleteReview = (e) => {
    e.preventDefault();
    dispatch(deleteReviewStartAsync(id, _id));
  };
  return (
    <ReviewContainer>
      <InfoContainer>
        <UserName>{author}</UserName>
        <Date>{formatDate(date)}</Date>
      </InfoContainer>

      <Rating>Rating: {rating}</Rating>
      <Content>{content}</Content>

      <FunctionalityContainer>
        <FunctionalityButton type="button" onClick={deleteReview}>
          Delete
        </FunctionalityButton>
      </FunctionalityContainer>
    </ReviewContainer>
  );
};

export default Review;
