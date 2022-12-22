import { Wrapper, NavBar } from "./navigation.styles.js";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Button, { BUTTON_TYPES } from "../../components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/user.action";
import { selectUser } from "../../store/user/user.selector";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const signIn = () => {
    navigate("/auth");
    // dispatch(signInStartAsync());
  };

  const signOut = () => {
    // navigate("/auth");
    dispatch(logOut());
  };
  return (
    <Fragment>
      <Wrapper>
        <NavBar className="navbar navbar-expand-lg navbar-light bg-white ">
          <div className="container-fluid">
            <Link className="brand" to="/">
              G.G
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/new">
                    Share
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/post">
                    Explore
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/community">
                    Community
                  </Link>
                </li>
              </ul>
              <div>
                {user ? (
                  <Button onClick={signOut} buttonType={BUTTON_TYPES.OUTLINE}>
                    Sign Out
                  </Button>
                ) : (
                  <Button onClick={signIn}>Sign In</Button>
                )}
              </div>
            </div>
          </div>
        </NavBar>
      </Wrapper>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
