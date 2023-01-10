import NewPostForm from "../../components/NewPostForm/NewPostForm.component";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { Container, Title } from "./new-post.styles.js";
const NewPost = () => {
  useRedirectLoggedOutUser("/signin");
  return (
    <Container>
      <Title>Share You Product with Us</Title>

      <NewPostForm />
    </Container>
  );
};

export default NewPost;
