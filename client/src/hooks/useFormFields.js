import { useState } from "react";

const useFormFields = (defaultFormFields) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return {
    formFields,
    resetFormFields,
    handleChange,
  };
};
export default useFormFields;
