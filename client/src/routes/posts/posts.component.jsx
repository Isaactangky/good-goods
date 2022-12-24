import { Wrapper, Content, PostsContainer, Title } from "./posts.styles.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectPosts } from "../../store/posts/posts.selector";
import { fetchPostsStartAsync } from "../../store/posts/posts.action";
import PostPreview from "../../components/post-preview/post-preview.component";
import Spinner from "../../components/Spinner/Spinner.component.jsx";
const Posts = () => {
  // return <h1>This is Posts route</h1>;
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsStartAsync());
  }, []);
  const posts = useSelector(selectPosts);
  if (isLoading) return <Spinner />;
  return (
    <Wrapper>
      <Content>
        <Title>
          <h3>Fresh Posts</h3>
        </Title>
        <PostsContainer>
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </PostsContainer>
      </Content>
    </Wrapper>
  );
};

export default Posts;
