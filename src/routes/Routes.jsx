import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import AddStudent from "../components/AddStudent/AddStudent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/add-student",
        element: <AddStudent/>,
      },
      {
        path: "/manage-student",
        element: <div>manage</div>,
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
