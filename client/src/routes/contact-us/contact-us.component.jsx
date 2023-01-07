import { Container, Title } from "../new-post/new-post.styles";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm.component";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";

const ContactUs = () => {
  useRedirectLoggedOutUser("/auth");
  return (
    <Container>
      <Title>Send Us a Message</Title>
      <ContactUsForm />
    </Container>
  );
};

export default ContactUs;
