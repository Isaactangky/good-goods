import styles from "./navigation.module.scss";
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
      <div className={styles.navigation_container}>
        <Link className={styles.logo_container} to="/">
          GG
        </Link>
        <div className={styles.nav_links}>
          <Link className={styles.nav_link} to="/new">
            Share
          </Link>
          <Link className={styles.nav_link} to="/post">
            Explore
          </Link>

          <Link className={styles.nav_link} to="/community">
            Community
          </Link>
        </div>
        <div className={styles.login_container}>
          {user ? (
            <Button onClick={signOut} buttonType={BUTTON_TYPES.OUTLINE}>
              Sign Out
            </Button>
          ) : (
            <Button onClick={signIn}>Sign In</Button>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
