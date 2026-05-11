import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#020617] pt-28 md:pt-32">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
