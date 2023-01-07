import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/user.selector";
import useFormFields from "../../hooks/useFormFields";
import { setSucessAlert, setError } from "../../store/alert/alert.action";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../form-input/form-input.component";
import { Form } from "../NewPostForm/NewPostForm.styles";
import FormTextarea from "../FormTextarea/FormTextarea.component";

const defaultFormFields = {
  subject: "",
  message: "",
};

const ContactUsForm = () => {
  const {
    formFields: { subject, message },
    resetFormFields,
    handleChange,
  } = useFormFields(defaultFormFields);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (token) config.headers["x-auth-token"] = token;

      const { data } = await axios.post(
        `http://localhost:5000/api/contactus`,
        {
          subject,
          message,
        },
        config
      );
      if (data.success) dispatch(setSucessAlert(data.message));
      resetFormFields();
      setIsLoading(false);
    } catch (error) {
      dispatch(setError(error.response.data.message, error.response.status));
      setIsLoading(false);
    }
  };
  return (
    <Form onSubmit={sendEmail}>
      <FormInput
        label="subject"
        type="text"
        name="subject"
        value={subject}
        onChange={handleChange}
        required
      />

      <FormTextarea
        label="message"
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
        rows="10"
        required
      />
      <Button buttonType={BUTTON_TYPES.OUTLINE} disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactUsForm;
