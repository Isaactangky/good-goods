import { Group, Input, InputLabel } from "./FormInput.styles";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && <InputLabel>{label}</InputLabel>}
      <Input {...otherProps} />
    </Group>
  );
};
export default FormInput;
