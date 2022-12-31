import { useDispatch, useSelector } from "react-redux";
import { signInStartAsync } from "../../store/user/user.action";
import { selectIsLoadingUser } from "../../store/user/user.selector";
import { Container, ButtonContainer, Title, Footer } from "./SignInForm.styles";
import Button from "../Button/Button.component";
import FormInput from "../form-input/form-input.component";
import useAuthFormFields from "../../hooks/useAuthFormFields";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = ({ setIsSignUp }) => {
  const {
    formFields: { email, password },
    resetFormFields,
    handleChange,
  } = useAuthFormFields(defaultFormFields);
  const isLoadingUser = useSelector(selectIsLoadingUser);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInStartAsync({ email, password }));
    resetFormFields();
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
        <button onClick={() => setIsSignUp(true)}>Sign up</button>
      </Footer>
    </Container>
  );
};

export default SignInForm;
