import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useFormFields from "../../hooks/useFormFields";
import { setSucessAlert, setError } from "../../store/alert/alert.action";
import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import { Form } from "../NewPostForm/NewPostForm.styles";
import FormTextarea from "../FormTextarea/FormTextarea.component";

const defaultFormFields = {
  subject: "",
  email: "",
  message: "",
};

const ContactUsForm = () => {
  const {
    formFields: { subject, email, message },
    resetFormFields,
    handleChange,
  } = useFormFields(defaultFormFields);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post(`http://localhost:5000/api/contactus`, {
        subject,
        email,
        message,
      });
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
      <FormInput
        label="email"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />

      <FormTextarea
        label="message"
        type="text"
        name="message"
        value={message}
        onChange={handleChange}
        rows="5"
        required
      />
      <Button buttonType={BUTTON_TYPES.BASE} disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
};

export default ContactUsForm;
