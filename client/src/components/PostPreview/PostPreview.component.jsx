import { Link } from "react-router-dom";
import {
  Content,
  Wrapper,
  Image,
  Info,
  ImageContainer,
} from "./PostPreview.styles.js";
import NoImage from "../../images/no_image.jpg";
const PostPreview = ({ post }) => {
  const { _id, title, images, description, category } = post;
  if (!description || !title) return;
  return (
    <Wrapper>
      {/* <div > */}
      <Content to={`/post/${_id}`}>
        <ImageContainer>
          <Image
            src={images.length > 0 ? images[0].url : NoImage}
            alt="preview-image"
          />
        </ImageContainer>
        <Info>
          <h4>{title}</h4>

          <span className="description">{description.slice(0, 80)}</span>
          <span className="category">{category}</span>
        </Info>
      </Content>
    </Wrapper>
  );
};

export default PostPreview;
