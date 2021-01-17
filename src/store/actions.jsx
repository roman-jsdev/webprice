export const authSuccess = (token) => {
  return {
    type: "AUTH_SUCCESS",
    token,
  };
};

export const autoLogout = (time) => {
  return setTimeout(() => {
    logout();
  }, time * 1000);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: "AUTH_LOGOUT",
  };
};

export const autoLogin = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return logout();
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate <= new Date()) {
      return logout();
    } else {
      autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000);
      return authSuccess(token);
    }
  }
};
