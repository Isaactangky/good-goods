import { useSelector } from "react-redux";
import {
  selectIsLoadingReviews,
  selectReviews,
} from "../../store/post/post.selector";
import AddReviewForm from "../AddReviewForm/AddReviewForm.component";
import {
  ReviewsContainer,
  Wrapper,
  Title,
  Content,
} from "./ReviewsSection.styles";
import Review from "../Review/Review.component";
import Spinner from "../Spinner/Spinner.component";
const ReviewsSection = () => {
  const reviews = useSelector(selectReviews);
  const isLoadingReviews = useSelector(selectIsLoadingReviews);
  return (
    <Wrapper>
      <Content>
        <Title>Reviews</Title>

        <AddReviewForm />
        {isLoadingReviews ? (
          <Spinner />
        ) : (
          <ReviewsContainer>
            {reviews && reviews.length
              ? reviews.map((review) => (
                  <Review key={review._id} review={review} />
                ))
              : null}
          </ReviewsContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default ReviewsSection;
