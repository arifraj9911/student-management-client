import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import AddStudent from "../components/AddStudent/AddStudent";
import ManageStudent from "../components/ManageStudent/ManageStudent";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Navigate to="/manage-student" replace />,
      },
      {
        path: "/add-student",
        element: (
          <PrivateRoute>
            <AddStudent />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-student",
        element: (
          <PrivateRoute>
            <ManageStudent />
          </PrivateRoute>
        ),
      },

      {
        path: "*",
        element: <div>404 error</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);
