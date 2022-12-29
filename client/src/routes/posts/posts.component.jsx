import { Wrapper, Content, PostsContainer, Title } from "./posts.styles.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectPosts } from "../../store/posts/posts.selector";
import { fetchPostsStartAsync } from "../../store/posts/posts.action";
import PostPreview from "../../components/PostPreview/PostPreview.component";
import Spinner from "../../components/Spinner/Spinner.component.jsx";
import { CATEGORIES } from "../../config";
const categories = ["latest", ...CATEGORIES];
const Posts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (searchTerm === "latest") dispatch(fetchPostsStartAsync());
    else dispatch(fetchPostsStartAsync(searchTerm));
  }, [searchTerm]);
  const posts = useSelector(selectPosts);
  const handleOnClick = (category) => {
    setSearchTerm(category);
  };

  return (
    <Wrapper>
      <Content>
        <Title>
          {categories.map((category) => (
            <button
              onClick={() => handleOnClick(category)}
              className={searchTerm === category ? "category-active" : ""}
            >
              {category}
            </button>
          ))}
        </Title>
        {isLoading ? (
          <Spinner />
        ) : (
          <PostsContainer>
            {posts.map((post) => (
              <PostPreview key={post._id} post={post} />
            ))}
          </PostsContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default Posts;
