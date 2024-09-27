import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <CustomProvider theme="light">
        <App />
      </CustomProvider>
    </RouterProvider>
  </StrictMode>
);
