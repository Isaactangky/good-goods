import { BaseButton, OutlineButton, ButtonSpinner } from "./button.styles";
export const BUTTON_TYPES = {
  BASE: "base",
  OUTLINE: "outline",
};
const getButton = (buttonType = BUTTON_TYPES.BASE) =>
  ({
    [BUTTON_TYPES.BASE]: BaseButton,
    [BUTTON_TYPES.OUTLINE]: OutlineButton,
  }[buttonType]);

const Button = ({ children, buttonType, disabled, ...otherProps }) => {
  const ButtonElement = getButton(buttonType);
  return (
    <ButtonElement disabled={disabled ? true : false} {...otherProps}>
      {disabled ? <ButtonSpinner /> : children}
    </ButtonElement>
  );
};

export default Button;
