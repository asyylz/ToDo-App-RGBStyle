import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./src/index.css";
import "./src/App.css";

ReactDOM.createRoot(document.querySelector(".container")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
