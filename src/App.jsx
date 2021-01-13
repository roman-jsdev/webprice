import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { MainWrapper } from "./containers/Layout/MainWrapper";
import { ProgressProvider } from "./containers/Quiz/ProgressContext";
import { CalculatorPage } from "./pages/CalculatorPage";
import { Home } from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ProgressProvider>
        <MainWrapper>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/calculator" exact component={CalculatorPage} />
          </Switch>
        </MainWrapper>
      </ProgressProvider>
    </BrowserRouter>
  );
}

export default App;
