import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  selectIsAuthenticated,
  selectIsLoadingUser,
} from "../../store/user/user.selector";
import { userSignUpStartAsync } from "../../store/user/user.action";
import { setError } from "../../store/alert/alert.action";
import {
  Content,
  Title,
  Footer,
  Wrapper,
  ButtonContainer,
} from "./auth.styles";
import useFormFields from "../../hooks/useFormFields";
import FormInput from "../../components/FormInput/FormInput.component";
import Button, { BUTTON_TYPES } from "../../components/Button/Button.component";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const {
    formFields: { username, email, password, confirmPassword },
    resetFormFields,
    handleChange,
  } = useFormFields(defaultFormFields);
  const isLoadingUser = useSelector(selectIsLoadingUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !confirmPassword)
      return dispatch(setError("Please fill in all the fields.", 400));

    if (password !== confirmPassword)
      return dispatch(setError("Passwords do not match.", 400));

    dispatch(userSignUpStartAsync({ username, email, password }));
    resetFormFields();
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <Content>
        <Title>Sign Up on GG</Title>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Username"
            type="text"
            required
            name="username"
            value={username}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button
              type="submit"
              buttonType={BUTTON_TYPES.OUTLINE}
              disabled={isLoadingUser}
            >
              Sign Up
            </Button>
          </ButtonContainer>
        </form>
        <Footer>
          Already have an account?{" "}
          <Link to="/signin">
            <button>sign in</button>
          </Link>
        </Footer>
      </Content>
    </Wrapper>
  );
};
export default SignUp;
