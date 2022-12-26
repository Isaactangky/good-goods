import { Textarea, Container, Label } from "./FormTextarea.styles";

const FormTextarea = ({ label, name, ...otherProps }) => {
  return (
    <Container>
      {label ? <Label for={name}>{label}</Label> : null}
      <Textarea name={name} {...otherProps}></Textarea>
    </Container>
  );
};
export default FormTextarea;
