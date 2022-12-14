import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <main className={styles.home_container}>
      <h1>Good Goods</h1>
      <p className="lead px-auto">
        Welcome to Good Goods! <br />
        Jump right in and explore our many product recommendations. <br />
        Feel free to share some of your own and comment on others!
      </p>
      <Link to="/post">
        <Button>Explore</Button>
      </Link>
    </main>
  );
};
export default Home;
