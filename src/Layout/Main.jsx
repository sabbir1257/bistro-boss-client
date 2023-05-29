import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation(); 
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("singup");

  return (
    <div>
       {noHeaderFooter || <Navbar />}
       <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
