import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import { CustomProvider } from "rsuite";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./provider/AuthProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <CustomProvider theme="light">
            <App />
          </CustomProvider>
        </RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
