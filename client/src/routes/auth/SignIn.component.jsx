import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link, Navigate } from "react-router-dom";
import { signInStartAsync } from "../../store/user/user.action";
import {
  selectIsAuthenticated,
  selectIsLoadingUser,
} from "../../store/user/user.selector";
import {
  Content,
  ButtonContainer,
  Title,
  Footer,
  Wrapper,
} from "./auth.styles";
import Button from "../../components/Button/Button.component";
import FormInput from "../../components/FormInput/FormInput.component";
import useFormFields from "../../hooks/useFormFields";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signInStartAsync({ email, password }));
    if (state?.prev.pathname) {
      resetFormFields();
      const redrectTo = state.prev.pathname;
      navigate(redrectTo);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <Content>
        <Title>Sign In</Title>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="email"
            type="text"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            label="password"
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
          <span>Don't have a account? </span>
          <Link to="/signup">
            <button>Create One</button>
          </Link>
        </Footer>
      </Content>
    </Wrapper>
  );
};

export default SignIn;
