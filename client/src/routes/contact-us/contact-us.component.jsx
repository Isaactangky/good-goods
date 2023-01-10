import ContactUsForm from "../../components/ContactUsForm/ContactUsForm.component";
import { Wrapper, Content, Title, ContactInfo } from "./ContactUs.styles";
const ContactUs = () => {
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
          <ContactUsForm />
        </div>
      </Content>
    </Wrapper>
  );
};

export default ContactUs;
