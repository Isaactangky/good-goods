import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES } from "../button/button.component";
import "./sign-up-form.styles.scss";
import { useDispatch } from "react-redux";
import { userRegisterStartAsync } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await dispatch(
        userRegisterStartAsync({ username, email, password })
      );
      resetFormFields();
      if (data.success) navigate("/");
    } catch (error) {
      console.log("sign up error", error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your name and password</span>
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
        <Button type="submit" buttonType={BUTTON_TYPES.OUTLINE}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
