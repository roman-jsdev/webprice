import { useEffect } from "react";

import { Logout } from "./components/Logout";
import { MainWrapper } from "./components/MainWrapper";
import { NavbarController } from "./containers/NavbarController";
import { ProgressProvider } from "./context/ProgressContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Orders } from "./pages/Orders";
import { autoLogin } from "./store/actions";
import { useStore } from "./store/store";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

export const App = () => {
  const {
    state: { token: isAuthenticated },
    dispatch,
  } = useStore();

  sessionStorage.clear();

  useEffect(() => dispatch(autoLogin()), []);

  const routes = [{ path: "/", exact: true, component: Home }];

  if (isAuthenticated) {
    routes.push({ path: "/orders", exact: false, component: Orders });
    routes.push({ path: "/logout", exact: false, component: Logout });
  } else {
    routes.push({ path: "/login", exact: false, component: Login });
  }

  return (
    <BrowserRouter>
      <NavbarController />
      <ProgressProvider>
        <MainWrapper>
          <Switch>
            {routes.map(({ path, exact, component }) => (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </MainWrapper>
      </ProgressProvider>
    </BrowserRouter>
  );
};
