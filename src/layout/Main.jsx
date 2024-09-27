import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="xl:max-w-screen-2xl mx-auto lg:max-w-screen-xl p-8  min-h-screen">
      <Navbar />
      <div className="flex mt-20 gap-6">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="flex-grow ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
