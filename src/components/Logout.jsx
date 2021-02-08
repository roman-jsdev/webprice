import { useEffect } from "react";
import { logout } from "@store/actions";
import { useStore } from "@store/store";
import { Redirect } from "react-router-dom";

export const Logout = () => {
  const globalState = useStore();
  const { dispatch } = globalState;

  useEffect(() => {
    dispatch(logout());
  }, []);

  return <Redirect to={"/"} />;
};
