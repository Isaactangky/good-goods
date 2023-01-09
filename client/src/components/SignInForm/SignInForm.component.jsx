import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signInStartAsync } from "../../store/user/user.action";
import {
  selectIsAuthenticated,
  selectIsLoadingUser,
} from "../../store/user/user.selector";
import { Container, ButtonContainer, Title, Footer } from "./SignInForm.styles";
import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import useFormFields from "../../hooks/useFormFields";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = ({ setIsSignUp }) => {
  const {
    formFields: { email, password },
    resetFormFields,
    handleChange,
  } = useFormFields(defaultFormFields);
  const isLoadingUser = useSelector(selectIsLoadingUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInStartAsync({ email, password }));
    if (isAuthenticated && state) {
      resetFormFields();
      const redrectTo = state.prev.pathname;
      navigate(redrectTo);
    }
  };
  return (
    <Container>
      <Title>Sign In</Title>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
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
        <ButtonContainer>
          <Button type="submit" disabled={isLoadingUser}>
            Sign In
          </Button>
        </ButtonContainer>
      </form>
      <Footer>
        Don't have a account?{" "}
        <button onClick={() => setIsSignUp(true)}>Create One</button>
      </Footer>
    </Container>
  );
};

export default SignInForm;
