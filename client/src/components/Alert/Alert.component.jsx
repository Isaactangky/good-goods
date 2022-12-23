import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Content } from "./Alert.styles";
import { clearAlert } from "../../store/alert/alert.action";
import { selectAlert } from "../../store/alert/alert.selector";
import { ALERT_TYPES } from "../../store/alert/alert.type";
const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(selectAlert);
  useEffect(() => {
    if (alert.type) {
      const timeout = setTimeout(() => dispatch(clearAlert()), 3000);
      return () => clearTimeout(timeout);
    }
  }, [alert]);
  console.log(alert);
  return (
    <Wrapper type={alert.type}>
      <Content type={alert.type}>
        <p>{alert.message}</p>
      </Content>
    </Wrapper>
  );
};

export default Alert;
