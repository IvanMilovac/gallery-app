import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./components/context/AuthContext";

import App from "./App";

import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
