import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider } from "react-router/dom";
import ReactDOM from "react-dom/client";
import router from "./routes/router.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
);