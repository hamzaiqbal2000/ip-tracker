import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IpProvider } from "./context/IpContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IpProvider>
      <App />
    </IpProvider>
  </React.StrictMode>
);
