import styles from "./form-select.module.scss";
const FormSelect = ({ options, label, name, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <label htmlFor={name}>{label}</label>
      <select
        className={styles["category-select"]}
        {...otherProps}
        name={name}
        id={name}
      >
        {options.map((option) => (
          <option name={name} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
export default FormSelect;
