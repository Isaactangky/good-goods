import {
  Username,
  ReviewContainer,
  Content,
  Date,
  Rating,
  FunctionalityContainer,
  FunctionalityButton,
  InfoContainer,
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
      <InfoContainer>
        <Username>{author.username}</Username>
        <Date>{formatDate(date)}</Date>
      </InfoContainer>

      <Rating>
        <StarRatings
          rating={rating}
          starRatedColor="orangered"
          starHoverColor="orange"
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="3px"
        />
      </Rating>
      <Content>{content}</Content>

      <FunctionalityContainer>
        {isAuthenticated && author._id === user._id ? (
          <FunctionalityButton type="button" onClick={deleteReview}>
            Delete
          </FunctionalityButton>
        ) : null}
      </FunctionalityContainer>
    </ReviewContainer>
  );
};

export default Review;
