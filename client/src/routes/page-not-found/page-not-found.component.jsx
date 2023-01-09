import { Link } from "react-router-dom";
import Button, { BUTTON_TYPES } from "../../components/Button/Button.component";
import { Content, Wrapper } from "./page-not-found.styles";

const PageNotFound = () => (
  <Wrapper>
    <Content>
      <h3>Page Not Found</h3>
      <Link to="/">
        <Button buttonType={BUTTON_TYPES.OUTLINE}>Back to Home</Button>
      </Link>
    </Content>
  </Wrapper>
);

export default PageNotFound;
