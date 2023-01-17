import EditPostForm from "../../components/EditPostForm/EditPostForm.component";
import { Wrapper, Title, Content } from "../new-post/new-post.styles";

const EditPost = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Edit product info</Title>
        <EditPostForm />
      </Content>
    </Wrapper>
  );
};

export default EditPost;
