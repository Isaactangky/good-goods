import {
  Wrapper,
  Content,
  PostsContainer,
  Title,
  CategoryButton,
} from "./posts.styles.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoadingPosts,
  selectPosts,
} from "../../store/posts/posts.selector";
import { fetchPostsStartAsync } from "../../store/posts/posts.action";
import PostPreview from "../../components/PostPreview/PostPreview.component";
import Spinner from "../../components/Spinner/Spinner.component.jsx";
import { CATEGORIES } from "../../config";
const categories = ["latest", ...CATEGORIES];
const Posts = () => {
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const dispatch = useDispatch();
  const [searchCategory, setSearchCategory] = useState("latest");
  useEffect(() => {
    if (searchCategory === "latest") dispatch(fetchPostsStartAsync());
    else dispatch(fetchPostsStartAsync(searchCategory));
  }, [searchCategory, dispatch]);
  const posts = useSelector(selectPosts);
  const handleOnClick = (category) => {
    setSearchCategory(category);
  };

  return (
    <Wrapper>
      <Content>
        <Title>
          {categories.map((category) => (
            <CategoryButton
              onClick={() => handleOnClick(category)}
              className={searchCategory === category ? "category-active" : ""}
            >
              {category}
            </CategoryButton>
          ))}
        </Title>
        {isLoadingPosts ? (
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
