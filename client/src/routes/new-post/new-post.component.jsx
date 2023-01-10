import NewPostForm from "../../components/NewPostForm/NewPostForm.component";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { Wrapper, Title, Content } from "./new-post.styles.js";
const NewPost = () => {
  useRedirectLoggedOutUser("/signin");
  return (
    <Wrapper>
      <Content>
        <Title>Share You Product with Us</Title>
        <NewPostForm />
      </Content>
    </Wrapper>
  );
};

export default NewPost;
