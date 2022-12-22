import { useState, useEffect, useRef } from "react";
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
import { Fragment } from "react";
import Button, { BUTTON_TYPES } from "../../components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/user.action";
import { selectUser } from "../../store/user/user.selector";
import { links } from "../../config.js";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
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
      <NavBar>
        <Container>
          <NavHeader>
            <Link className="logo" to="/">
              <span className="brand">G.G</span>
            </Link>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </NavHeader>

          <LinksAuthContainer ref={linksContainerRef}>
            <LinksAuth ref={linksRef}>
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
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
