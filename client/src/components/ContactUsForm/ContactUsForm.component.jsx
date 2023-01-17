import Button, { BUTTON_TYPES } from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";
import { Form } from "../NewPostForm/NewPostForm.styles";
import FormTextarea from "../FormTextarea/FormTextarea.component";

const ContactUsForm = ({
  subject,
  email,
  message,
  isLoading,
  sendEmail,
  handleChange,
}) => {
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
