import { Group, Input, InputLabel } from "./FormFileInput.styles";
const FormFileInput = ({ label, id, ...otherProps }) => {
  return (
    <Group>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <Input type="file" id={id} {...otherProps} />
    </Group>
  );
};
export default FormFileInput;
