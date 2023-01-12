import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/user/user.selector";
import { Content, Wrapper, Text, ButtonContainer } from "./ProductInfo.styles";
import Carousel from "../Carousel/Carousel.component";
import Button from "../Button/Button.component";
import { BUTTON_TYPES } from "../Button/Button.component";
import { selectPost } from "../../store/post/post.selector";
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
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <Wrapper>
      <Content>
        {images?.length > 0 && <Carousel images={images} />}
        <Text>
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
      </Content>
    </Wrapper>
  );
};

export default ProductInfo;
