import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut(); // Perform logout
    navigate("/login"); // Navigate to login page after logout
  };
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
          <button
            onClick={handleLogout}
            className="block w-full text-start text-gray-500 text-lg px-4 py-2 hover:text-black hover:bg-gray-50 no-underline rounded-md"
          >
            Logout
          </button>
        </li>
        <li>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive
                ? "block w-full rounded-md bg-red-400 text-white text-lg px-4 py-2 no-underline"
                : "block w-full text-gray-500 text-lg px-4 py-2 hover:text-black hover:bg-gray-50 no-underline"
            }
            style={({ isActive }) =>
              isActive ? { color: "white", textDecoration: "none" } : {}
            }
          >
            Test
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
