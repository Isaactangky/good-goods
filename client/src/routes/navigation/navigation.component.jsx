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
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/user.action";
import { selectUser } from "../../store/user/user.selector";
import { links } from "../../config.js";
import { FaBars } from "react-icons/fa";
import Button, { BUTTON_TYPES } from "../../components/button/button.component";
import Alert from "../../components/Alert/Alert.component.jsx";
import { selectAlert } from "../../store/alert/alert.selector.js";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const alert = useSelector(selectAlert);
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
    navigate("/auth");
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
                  <Button onClick={signIn}>Sign In</Button>
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
