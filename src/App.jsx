import { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Logout } from "./components/Logout";
import { Navbar } from "./components/Navbar/Navbar";
import { MainWrapper } from "./containers/Layout/MainWrapper";
import { ProgressProvider } from "./containers/Quiz/ProgressContext";
import { CalculatorPage } from "./pages/CalculatorPage";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Orders } from "./pages/Orders";
import { autoLogin } from "./store/actions";
import { useStore } from "./store/store";

function App() {
  const globalState = useStore();
  const { state, dispatch } = globalState;

  const isAuthenticated = !!state.token;
  sessionStorage.clear();

  useEffect(() => {
    dispatch(autoLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calculator" component={CalculatorPage} />
      <Route path="/login" component={Login} />
      <Redirect to="/" exact />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <ProgressProvider>
        <MainWrapper>{routes}</MainWrapper>
      </ProgressProvider>
    </BrowserRouter>
  );
}

export default App;
