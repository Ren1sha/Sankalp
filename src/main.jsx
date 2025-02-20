import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   {/* Wrap the app inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
