import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Provider } from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
      <Toaster />
    </BrowserRouter>
);
