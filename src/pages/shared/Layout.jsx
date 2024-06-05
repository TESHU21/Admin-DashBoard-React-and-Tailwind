import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className=" flex flex-row _min-h-screen   w-full overflow-hidden   bg-neutral-200">
      <Sidebar />
      <div className=" flex flex-col w-full h-[100vh]">
        <div className="flex flex-row">
          <Header />
        </div>
        <div className=" overflow-scroll  flex-1 ">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Layout;
