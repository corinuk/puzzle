import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//npm i firebase
//keychain app = 2e9efba8b26cce52b8a40b62d8e5eb439330a68e
