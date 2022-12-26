import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.component";
import { Wrapper } from "./home.styles.js";
const Home = () => {
  return (
    <Wrapper>
      <h1>Good Goods</h1>
      <p>
        Welcome to Good Goods! <br />
        Jump right in and explore our many product recommendations. <br />
        Feel free to share some of your own and comment on others!
      </p>
      <Link to="/post">
        <Button>Explore</Button>
      </Link>
    </Wrapper>
  );
};
export default Home;
