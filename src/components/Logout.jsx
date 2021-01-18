import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../store/actions";
import { useStore } from "../store/store";

export const Logout = () => {
  const globalState = useStore();
  const { dispatch } = globalState;

  useEffect(() => {
    dispatch(logout());
  }, []);

  return <Redirect to={"/"} />;
};
