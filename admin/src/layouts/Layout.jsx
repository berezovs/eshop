import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/topbar/Topbar";
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
