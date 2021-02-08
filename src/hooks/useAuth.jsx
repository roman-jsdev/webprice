import { useEffect, useState } from "react";
import { useStore } from "@store/store";
import { authSuccess, autoLogout } from "@store/actions";

import { useHistory } from "react-router-dom";
import axios from "axios";

export const useAuth = (authData) => {
  const { dispatch } = useStore();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_AXAU}`;

  const auth = async () => {
    try {
      setIsLoading(true);
      const {
        data: { expiresIn, idToken, localId },
      } = await axios.post(url, authData);

      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      localStorage.setItem("token", idToken);
      localStorage.setItem("userId", localId);
      localStorage.setItem("expirationDate", expirationDate);

      dispatch(authSuccess(idToken));
      dispatch(autoLogout(expiresIn));

      history.push("/");
    } catch (e) {
      alert("Incorrect Login Data");
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => setIsLoading(false), []);

  return [auth, isLoading];
};
