import { Group, Select, Label } from "./FormSelect.styles";

const FormSelect = ({ options, label, name, ...otherProps }) => {
  return (
    <Group>
      <Label htmlFor={name}>{label}</Label>
      <Select {...otherProps} name={name} id={name}>
        {options.map((option) => (
          <option name={name} key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Group>
  );
};
export default FormSelect;
