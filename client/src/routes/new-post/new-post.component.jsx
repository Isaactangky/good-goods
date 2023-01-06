import NewPostForm from "../../components/NewPostForm/NewPostForm.component";
import { Container, Title } from "./new-post.styles.js";
const NewPost = () => {
  return (
    <Container>
      <Title>Share you product</Title>

      <NewPostForm />
    </Container>
  );
};

export default NewPost;
