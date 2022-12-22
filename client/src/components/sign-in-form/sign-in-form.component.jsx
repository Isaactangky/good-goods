import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { useEffect, useState } from "react";
import "./sign-in-form.styles.scss";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { signInStartAsync } from "../../store/user/user.action";
import { clearError } from "../../store/error/error.action";
import { selectError } from "../../store/error/error.selector";
import { selectIsLoadingUser } from "../../store/user/user.selector";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [message, setMessage] = useState(null);
  const isLoading = useSelector(selectIsLoadingUser);
  const { email, password } = formFields;
  const error = useSelector(selectError);
  const resetFormFields = () => setFormFields(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    dispatch(signInStartAsync({ email, password }));

    resetFormFields();
    // if (data.success) navigate("/");
  };
  useEffect(() => {
    if (error.id === "LOGIN_ERROR") {
      setMessage(error.message.message);
    } else {
      setMessage(null);
    }
  }, [error]);
  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, []);
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

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
        {message ? (
          <div className="alert alert-danger bg-white border-white p-0 ">
            {message}
          </div>
        ) : null}
        <div className="buttons-container">
          <Button type="submit" disabled={isLoading}>
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
