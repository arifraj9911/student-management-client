import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import AddStudent from "../components/AddStudent/AddStudent";
import ManageStudent from "../components/ManageStudent/ManageStudent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-student",
        element: <AddStudent />,
      },
      {
        path: "/manage-student",
        element: <ManageStudent />,
      },
      {
        path: "*",
        element: <div>404 error</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>login</div>,
  },
  {
    path: "*",
    element: <div>404 error</div>,
  },
]);
