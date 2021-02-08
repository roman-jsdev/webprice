import React from "react";
import ReactDOM from "react-dom";
import "@src/index.css";
import { App } from "@src/App.jsx";
import { StateProvider } from "@store/store";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
