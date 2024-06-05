import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import { IoIosLogOut } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { SIDE_BAR_BOTTOM_LINKS, SIDE_BAR_LINKS } from "../../lib/navigation";
const linkClass =
  "flex  flex-row items-center  gap-2 font-light py-2 px-3   hover:bg-neutral-700  active:bg-neutral-600  rounded-sm  text-base overflow-hidden";

export default function Sidebar() {
  const [isopen, setIsopen] = useState(true);

  console.log(isopen);
  return (
    <div
      className={`relative  bg-neutral-900    flex flex-col duration-300  ${
        isopen ? "w-72" : "w-20"
      }`}
    >
      <FaArrowLeft
        className={`absolute  -right-3 top-24 text-gray-700 bg-white text-3xl   border-1 border-gray-600 rounded-full   cursor-pointer ${
          isopen ? "" : "rotate-180"
        } `}
        onClick={() => setIsopen(!isopen)}
      />

      <div className="items-center gap-2  pt-4 text-white flex ">
        <FcBullish fontSize={39} />
        <span
          className={` text-neutral-100 text-lg px-1 ${isopen ? "" : "hidden"}`}
        >
          OpenShop
        </span>
      </div>
      <div className="flex-1  py-8  flex flex-col gap-3 ">
        {SIDE_BAR_LINKS.map((item) => (
          <SidebarLink isopen={isopen} key={item.key} item={item} />
        ))}
      </div>
      <div className=" text-white flex flex-col  gap-0.5  pt-2 border-t	 border-white">
        {SIDE_BAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink isopen={isopen} key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-500 cursor-pointer", linkClass)}>
          {" "}
          <span className=" text-xl">{<IoIosLogOut />}</span> Logout
        </div>
      </div>
    </div>
  );
}
function SidebarLink({ item, isopen }) {
  const { pathname } = useLocation();
  // console.log(isopen);
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-white" : "  text-blue-200",
        linkClass
      )}
    >
      <div className="text-xl">{item.icon}</div>
      <div className={` text-xl ${isopen ? "" : " hidden"}`}>{item.label}</div>
    </Link>
  );
}
