import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#007AFF] px-3 py-2">
      <div className="flex gap-2 items-center">
        <div className="h-10 w-10 rounded-full bg-[#FFFFFF]"></div>
        <h4 className="text-white">Inventery Management System</h4>
      </div>
      <div>
        <Link to="/" className="text-white">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
