import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between item-center ">
      <span className="font-bold text-xl text-[#F33823]">Dev Cluster</span>
      <span className=" py-2 px-4 border rounded-md font-semibold">
        {user?.email}
      </span>
    </div>
  );
};

export default Navbar;
