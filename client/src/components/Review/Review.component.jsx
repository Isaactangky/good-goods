import {
  Username,
  ReviewContainer,
  Content,
  ReviewTime,
  Rating,
  ButtonContainer,
  FunctionalityButton,
} from "./Review.styles";
import StarRatings from "react-star-ratings";
import { formatDate } from "../../utils/format.utils";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReviewStartAsync } from "../../store/post/post.action";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/user/user.selector";
import { BiTimeFive } from "react-icons/bi";
const Review = ({ review: { _id, author, date, content, rating } }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const deleteReview = (e) => {
    e.preventDefault();
    dispatch(deleteReviewStartAsync(id, _id));
  };
  return (
    <ReviewContainer>
      <Username>{author.username}</Username>
      <ReviewTime>
        <BiTimeFive />
        <span>{formatDate(date)}</span>
      </ReviewTime>

      <Rating>
        <StarRatings
          rating={rating}
          starRatedColor="orangered"
          numberOfStars={5}
          name="rating"
          starDimension="16px"
          starSpacing="1px"
        />
      </Rating>
      <Content>{content}</Content>

      <ButtonContainer>
        {isAuthenticated && author._id === user.id ? (
          <FunctionalityButton type="button" onClick={deleteReview}>
            Delete
          </FunctionalityButton>
        ) : null}
      </ButtonContainer>
    </ReviewContainer>
  );
};

export default Review;
