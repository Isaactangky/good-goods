import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES } from "../button/button.component";
import "./register-form.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "../../store/error/error.selector";
import { selectIsLoadingUser } from "../../store/user/user.selector";
import { userRegisterStartAsync } from "../../store/user/user.action";
import { clearError, setError } from "../../store/error/error.action";

const defaultFormFields = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const [message, setMessage] = useState("");
  const error = useSelector(selectError);
  const isLoadingUser = useSelector(selectIsLoadingUser);
  const { username, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(clearError());
    setMessage("");
    if (password !== confirmPassword) {
      dispatch(
        setError({ message: "Passwords do not match." }, 400, "REGISTER_ERROR")
      );
      return;
    }
    dispatch(userRegisterStartAsync({ username, email, password }));
    resetFormFields();
    // if (data.success) navigate("/");
  };

  useEffect(() => {
    if (error.id === "REGISTER_ERROR") {
      setMessage(error.message.message);
    } else {
      setMessage(null);
    }
  }, [error]);
  useEffect(
    () => () => {
      dispatch(clearError());
    },
    []
  );

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
        {message ? (
          <div className="alert alert-danger bg-white border-white p-0 ">
            {message}
          </div>
        ) : null}
        <Button type="submit" buttonType={BUTTON_TYPES.OUTLINE}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default RegisterForm;
