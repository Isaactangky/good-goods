import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/user/user.selector";
import {
  Content,
  Wrapper,
  Text,
  ButtonContainer,
  LikeButton,
} from "./ProductInfo.styles";
import Carousel from "../Carousel/Carousel.component";
import Button from "../Button/Button.component";
import { BUTTON_TYPES } from "../Button/Button.component";
import { selectPost } from "../../store/post/post.selector";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toggleLikeStartAsync } from "../../store/post/post.action";

const ProductInfo = ({
  title,
  description,
  category,
  images,
  onDeleteHandler,
  onEditHandler,
}) => {
  const user = useSelector(selectUser);
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const onLike = () => {
    dispatch(toggleLikeStartAsync(post._id));
  };

  return (
    <Wrapper>
      <Content>
        <Text>
          {isAuthenticated && (
            <LikeButton onClick={onLike}>
              {post.likes && post.likes.indexOf(user.id) > -1 ? (
                <AiFillHeart />
              ) : (
                <AiOutlineHeart />
              )}
              <span style={{ fontWeight: "bold" }}>
                {post.likes && post.likes.length ? post.likes.length : 0}
              </span>
            </LikeButton>
          )}
          <h1>{title}</h1>
          <span>{category}</span>
          <p>{description}</p>
          {isAuthenticated && post.author && user.id === post.author._id ? (
            <ButtonContainer>
              <Button onClick={onEditHandler} buttonType={BUTTON_TYPES.OUTLINE}>
                Edit
              </Button>
              <Button onClick={onDeleteHandler}>Delete</Button>
            </ButtonContainer>
          ) : null}
        </Text>
        {images?.length > 0 && <Carousel images={images} />}
      </Content>
    </Wrapper>
  );
};

export default ProductInfo;
