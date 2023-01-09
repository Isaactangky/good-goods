import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectIsAuthenticated,
} from "../../store/user/user.selector";
import { deletePostStartAsync } from "../../store/post/post.action";
import { Content, Wrapper, Text, ButtonContainer } from "./ProductInfo.styles";
import Carousel from "../Carousel/Carousel.component";
import Button from "../Button/Button.component";
import { BUTTON_TYPES } from "../Button/Button.component";
import { useNavigate, useParams } from "react-router-dom";
import { selectPost } from "../../store/post/post.selector";
const ProductInfo = ({ title, description, category, images }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const post = useSelector(selectPost);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const onDeleteHandler = async () => {
    await dispatch(deletePostStartAsync(id));
    navigate("/");
  };
  const onEditHandler = () => {
    navigate(`/post/${id}/edit`);
  };
  return (
    <Wrapper>
      <Content>
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

        {images?.length > 0 && (
          <Carousel images={images} title="product preview" />
        )}
      </Content>
    </Wrapper>
  );
};

export default ProductInfo;
