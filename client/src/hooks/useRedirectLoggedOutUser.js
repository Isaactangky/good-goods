import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/user/user.selector";
import { setError } from "../store/alert/alert.action";

const useRedirectLoggedOutUser = (redirect) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(setError("Please sign in to continue."));
      navigate(redirect);
      return;
    }
  }, [redirect, dispatch, navigate, isAuthenticated]);
};
export default useRedirectLoggedOutUser;
