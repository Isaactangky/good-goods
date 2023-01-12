import {
  Content,
  Wrapper,
  Image,
  Info,
  ImageContainer,
  OtherInfo,
} from "./PostPreview.styles.js";
import { useNavigate } from "react-router-dom";
import NoImage from "../../images/no_image.jpg";
import { FaCommentAlt } from "react-icons/fa";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
const PostPreview = ({ post }) => {
  const { _id, title, images, description, category, reviews } = post;
  const navigate = useNavigate();
  if (!description || !title) return;

  return (
    <Wrapper>
      <Content>
        <ImageContainer>
          <Image
            src={images.length > 0 ? images[0].url : NoImage}
            alt="preview-image"
          />
        </ImageContainer>
        <Info>
          <h4>{title}</h4>

          <span className="description">{description.slice(0, 80)}</span>
          <OtherInfo>
            <span className="category">{category}</span>
            <span className="reviews-count">
              <FaCommentAlt />
              {reviews.length}
            </span>
            <Button
              onClick={() => navigate(`/post/${_id}`)}
              buttonType={BUTTON_TYPES.OUTLINE}
              style={{ marginLeft: "auto" }}
            >
              View
            </Button>
          </OtherInfo>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default PostPreview;
