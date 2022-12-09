import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="px-3  text-center d-flex flex-column  bg-black">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1>Good Goods</h1>
        <p className="lead px-auto">
          Welcome to Good Goods! <br />
          Jump right in and explore our many product recommendations. <br />
          Feel free to share some of your own and comment on others!
        </p>
        <Link
          to="/post"
          className="btn btn-lg btn-secondary font-weight-bold border-white bg-white"
        >
          Find Goods
        </Link>
      </div>
    </main>
  );
};
export default Home;
