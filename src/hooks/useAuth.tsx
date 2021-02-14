import { useEffect, useState } from "react";

import { useStore } from "../store/store";
import { authSuccess, autoLogout } from "../store/actions";
import { IAuthData } from "../interfaces/defaultInterfaces";

import { useHistory } from "react-router-dom";
import axios from "axios";

export const useAuth = (authData: IAuthData) => {
  const { dispatch } = useStore();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const url = `${process.env.REACT_APP_LOGIN_URL}${process.env.REACT_APP_AUTH_KEY}`;

  const auth = async () => {
    try {
      setIsLoading(true);
      const {
        data: { idToken, localId },
      } = await axios.post(url, authData);

      const expirationDate = new Date(new Date().getTime() + 3600000);

      localStorage.setItem("token", idToken);
      localStorage.setItem("userId", localId);
      localStorage.setItem("expirationDate", expirationDate.toString());

      dispatch(authSuccess(idToken));
      autoLogout(3600);

      history.push("/");
    } catch (e) {
      alert("Incorrect Login Data");
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => setIsLoading(false), []);

  return [auth, isLoading] as const;
};
