import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authCheckState } from "../../store/actions/actionAuth";

const authProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCheckState());
  });
  return <div>{children}</div>;
};
export default authProvider;
