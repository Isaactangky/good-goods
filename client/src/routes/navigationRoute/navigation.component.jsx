import styles from "./navigation.module.scss";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Button from "../../components/button/button.component";
const Navigation = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/auth");
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
            Goods
          </Link>
          <Link className={styles.nav_link} to="/community">
            Community
          </Link>
        </div>
        <div className={styles.login_container}>
          <Button onClick={onClickHandler}>Sign In</Button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
