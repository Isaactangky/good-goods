import { useState } from "react";
import { Wrapper } from "./authentication.styles.jsx";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/user/user.selector";
import SignInForm from "../../components/SignInForm/SignInForm.component";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      {isSignUp ? (
        <SignUpForm setIsSignUp={setIsSignUp} />
      ) : (
        <SignInForm setIsSignUp={setIsSignUp} />
      )}
    </Wrapper>
  );
};
export default Authentication;
