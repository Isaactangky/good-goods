import NewPostForm from "../../components/NewPostForm/NewPostForm.component";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { Container, Title } from "./new-post.styles.js";
const NewPost = () => {
  useRedirectLoggedOutUser("/auth");
  return (
    <Container>
      <Title>Share you product</Title>

      <NewPostForm />
    </Container>
  );
};

export default NewPost;
