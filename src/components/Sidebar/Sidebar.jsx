import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className=" ">
        <li className="">
          <NavLink
            className="text-gray-500 text-lg hover:text-red-400 hover:no-underline"
            to="/add-student"
          >
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-gray-500 text-lg hover:text-red-400 hover:no-underline"
            to="/manage-student"
          >
            Manage Student
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-gray-500 text-lg hover:text-red-400 hover:no-underline"
            to="/logout"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
