import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";
import { Navigate } from "react-router-dom";
// import { selectUserError } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/user/user.selector";
import { Fragment } from "react";
const Authentication = () => {
  // const userError = useSelector(selectUserError);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <Fragment>
      {/* {userError && <p className="user-error-message">{userError.message}</p>} */}

      <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
      </AuthenticationContainer>
    </Fragment>
  );
};
export default Authentication;
