import { Textarea, Group, Label } from "./FormTextarea.styles";

const FormTextarea = ({ label, name, ...otherProps }) => {
  return (
    <Group>
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Textarea name={name} {...otherProps}></Textarea>
    </Group>
  );
};
export default FormTextarea;
