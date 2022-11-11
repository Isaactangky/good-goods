import styles from "./button.module.scss";
export const BUTTON_TYPES = {
  BASE: "base",
  OUTLINE: "outline",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${styles["base"]} ${buttonType ? styles[buttonType] : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
