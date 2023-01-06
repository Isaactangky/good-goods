import { Container, Title } from "../new-post/new-post.styles";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm.component";
const ContactUs = () => {
  return (
    <Container>
      <Title>Send Us a Message</Title>
      <ContactUsForm />
    </Container>
  );
};

export default ContactUs;
