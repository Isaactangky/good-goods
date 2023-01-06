import { Link } from "react-router-dom";
import Button, { BUTTON_TYPES } from "../../components/Button/Button.component";

import { Wrapper, ButtonContainer } from "./home.styles.js";

const Home = () => {
  return (
    <Wrapper>
      <h1>Good Goods</h1>
      <p>
        Welcome to Good Goods! <br />
        Jump right in and explore our many product recommendations. <br />
        Feel free to share some of your own and comment on others!
      </p>
      <ButtonContainer>
        <Link to="/post">
          <Button>Explore</Button>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
};
export default Home;
