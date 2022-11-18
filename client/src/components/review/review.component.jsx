import { UserName, Container, Content, Date, Rating } from "./review.styles";
const Review = ({ review: { userName, date, content, rating } }) => {
  return (
    <Container>
      <UserName>{userName}</UserName>
      <Rating>Rating: {rating}</Rating>

      <Content>{content}</Content>
      <Date>{date}</Date>
    </Container>
  );
};

export default Review;
