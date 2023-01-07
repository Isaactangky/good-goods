import {
  Wrapper,
  Content,
  PostsContainer,
  Title,
  CategoryButton,
  ButtonContainer,
} from "./posts.styles.js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoadingPosts,
  selectIsLoadingMore,
  selectPage,
  selectPosts,
  selectTotalPages,
} from "../../store/posts/posts.selector";
import {
  fetchPostsStartAsync,
  loadMorePosts,
  postsReset,
} from "../../store/posts/posts.action";
import PostPreview from "../../components/PostPreview/PostPreview.component";
import Spinner from "../../components/Spinner/Spinner.component.jsx";
import Button, {
  BUTTON_TYPES,
} from "../../components/Button/Button.component.jsx";
import { CATEGORIES } from "../../config";
const categories = ["latest", ...CATEGORIES];
const Posts = () => {
  const dispatch = useDispatch();
  const [searchCategory, setSearchCategory] = useState("latest");
  const isLoadingPosts = useSelector(selectIsLoadingPosts);
  const isLoadingMore = useSelector(selectIsLoadingMore);

  const posts = useSelector(selectPosts);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const changeCategory = (category) => {
    console.log(category);
    if (category === searchCategory) return;
    dispatch(postsReset());
    setSearchCategory(category);
  };
  const onLoadMorePosts = () => dispatch(loadMorePosts());

  useEffect(() => {
    if (searchCategory === "latest") dispatch(fetchPostsStartAsync());
    else dispatch(fetchPostsStartAsync(searchCategory));
  }, [searchCategory, dispatch]);

  useEffect(() => {
    if (!isLoadingMore) return;
    if (searchCategory === "latest")
      dispatch(fetchPostsStartAsync("", page + 1));
    else dispatch(fetchPostsStartAsync(searchCategory, page + 1));
  }, [page, isLoadingMore, searchCategory, dispatch]);

  return (
    <Wrapper>
      <Content>
        <Title>
          {categories.map((category) => (
            <CategoryButton
              onClick={() => changeCategory(category)}
              className={searchCategory === category ? "category-active" : ""}
            >
              {category}
            </CategoryButton>
          ))}
        </Title>
        <PostsContainer>
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </PostsContainer>
        {isLoadingPosts && <Spinner />}
        {!isLoadingPosts && page < totalPages ? (
          <ButtonContainer>
            <Button buttonType={BUTTON_TYPES.OUTLINE} onClick={onLoadMorePosts}>
              Load More
            </Button>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <p>No More Posts</p>
          </ButtonContainer>
        )}
      </Content>
    </Wrapper>
  );
};

export default Posts;
