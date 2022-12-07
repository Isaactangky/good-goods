import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.styles.jsx";
// import { selectUserError } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { Fragment } from "react";
const Authentication = () => {
  // const userError = useSelector(selectUserError);
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
