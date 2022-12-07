import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPES } from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.styles.scss";

import { useDispatch } from "react-redux";
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from "../../store/user/user.action";
import { useNavigate } from "react-router-dom";
import { signInStartAsync } from "../../store/user/user.action";
const defaultFormFields = {
  username: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;
  const resetFormFields = () => setFormFields(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    // dispatch(googleSignInStart());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // dispatch(signInStartAsync((email, password)));

    const data = await dispatch(signInStartAsync({ username, password }));

    resetFormFields();
    if (data.success) navigate("/");
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username/Email"
          type="text"
          required
          name="username"
          value={username}
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES.BASE}
          >
            Google Sign In
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
