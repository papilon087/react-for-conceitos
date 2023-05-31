import React from "react";
import ReactDOM from "react-dom/client";

import // BrowserRouter,
// Route,
// Routes as Switch,
// Navigate,
"react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { App } from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
