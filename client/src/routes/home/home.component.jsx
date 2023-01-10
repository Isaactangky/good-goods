import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.component";

import { Wrapper, ButtonContainer } from "./home.styles.js";
import BackgroundImage from "../../images/background.jpg";
const Home = () => {
  return (
    <Wrapper background={BackgroundImage}>
      <h1>Good Goods</h1>
      <p>
        Welcome to Good Goods! <br />
        Good Goods is a place to discover fantastic products. <br />
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
