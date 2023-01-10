import { useState, useEffect, useRef, Fragment } from "react";
import {
  NavBar,
  NavHeader,
  Container,
  LinksAuthContainer,
  Links,
  AuthContainer,
  LinksAuth,
} from "./navigation.styles.js";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/user.action";
import { selectUser } from "../../store/user/user.selector";
import { links } from "../../data.js";
import { FaBars } from "react-icons/fa";
import Button, { BUTTON_TYPES } from "../../components/Button/Button.component";
import Alert from "../../components/Alert/Alert.component.jsx";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const location = useLocation();
  const [showLinks, setShowLinks] = useState(false);
  const linksAuthContainerRef = useRef(null);
  const linksAuthRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksAuthRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksAuthContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksAuthContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const signIn = () => {
    navigate("/signin");
  };

  const signOut = () => {
    dispatch(logOut());
  };
  return (
    <Fragment>
      <NavBar>
        <Container>
          <NavHeader>
            <Link className="logo" to="/">
              <span>G.G</span>
            </Link>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </NavHeader>

          <LinksAuthContainer ref={linksAuthContainerRef}>
            <LinksAuth ref={linksAuthRef}>
              <Links>
                {links.map(({ id, url, text }) => (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                ))}
              </Links>
              <AuthContainer>
                {user ? (
                  <Button onClick={signOut} buttonType={BUTTON_TYPES.OUTLINE}>
                    Sign Out
                  </Button>
                ) : (
                  <Link to="/signin" state={{ prev: location }}>
                    <Button onClick={signIn}>Sign In</Button>
                  </Link>
                )}
              </AuthContainer>
            </LinksAuth>
          </LinksAuthContainer>
        </Container>
      </NavBar>
      <Alert />
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
