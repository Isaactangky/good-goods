import EditPostForm from "../../components/edit-post-form/edit-post-form.component";
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
