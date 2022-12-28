import { useSelector } from "react-redux";
import { selectReviews } from "../../store/posts/posts.selector";
import AddReviewForm from "../AddReviewForm/AddReviewForm.component";
import Review from "../Review/Review.component";
import { ReviewsContainer, Container, Title } from "./ReviewsSection.styles";

const ReviewsSection = () => {
  const reviews = useSelector(selectReviews);
  return (
    <Container>
      <AddReviewForm />
      <Title>Reviews</Title>

      <ReviewsContainer>
        {reviews && reviews.length
          ? reviews.map((review) => <Review key={review._id} review={review} />)
          : null}
      </ReviewsContainer>
    </Container>
  );
};

export default ReviewsSection;
