import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="mt-[60px]">
        <li>
          <NavLink
            to="/add-student"
            className={({ isActive }) =>
              isActive
                ? "block w-full bg-red-400 text-white text-lg px-4 py-2 no-underline rounded-md"
                : "block w-full text-gray-500 text-lg px-4 py-2 hover:text-black hover:bg-gray-50 no-underline"
            }
            style={({ isActive }) =>
              isActive ? { color: "white", textDecoration: "none" } : {}
            }
          >
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manage-student"
            className={({ isActive }) =>
              isActive
                ? "block w-full rounded-md bg-red-400 text-white text-lg px-4 py-2 no-underline"
                : "block w-full text-gray-500 text-lg px-4 py-2 hover:text-black hover:bg-gray-50 no-underline"
            }
            style={({ isActive }) =>
              isActive ? { color: "white", textDecoration: "none" } : {}
            }
          >
            Manage Student
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? "block w-full rounded-md bg-red-400 text-white text-lg px-4 py-2 no-underline"
                : "block w-full text-gray-500 text-lg px-4 py-2 hover:text-black hover:bg-gray-50 no-underline"
            }
            style={({ isActive }) =>
              isActive ? { color: "white", textDecoration: "none" } : {}
            }
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
