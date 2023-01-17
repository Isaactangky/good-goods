import axios from "axios";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Wrapper, Content, Title, ContactInfo } from "./contact-us.styles";
import useFormFields from "../../hooks/useFormFields";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm.component";
import { setSucessAlert, setError } from "../../store/alert/alert.action";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/contactus`;
const defaultFormFields = {
  subject: "",
  email: "",
  message: "",
};

const ContactUs = () => {
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
      const { data } = await axios.post(`${API_URL}`, {
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
    <Wrapper>
      <Content>
        <ContactInfo>
          <Title>Contact Info</Title>
          <span>(852) 8765 4321</span>
          <span>goodgoodsapp@outlook.com</span>
        </ContactInfo>
        <div>
          <Title>Send Us a Message</Title>
          <ContactUsForm
            subject={subject}
            email={email}
            message={message}
            handleChange={handleChange}
            isLoading={isLoading}
            sendEmail={sendEmail}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

export default ContactUs;
