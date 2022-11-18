import AddReviewForm from "../add-review-form/add-review-form.component";
import Review from "../review/review.component";
import { ReviewsContainer, Container, Title } from "./reviews.styles";

const Reviews = ({ reviews }) => {
  return (
    <Container>
      <AddReviewForm />
      <Title>Reviews</Title>
      <ReviewsContainer>
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </ReviewsContainer>
    </Container>
  );
};

export default Reviews;
