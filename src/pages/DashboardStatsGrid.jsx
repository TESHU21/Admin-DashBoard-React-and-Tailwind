import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { FaUsers, FaCartShopping } from "react-icons/fa6";
function DashboardStatsGrid() {
  return (
    <div className="flex flex-wrap gap-4 md:flex-row  justify-around pt-4  px-3 sm:flex flex-col">
      <BoxWrapper>
        <div className=" rounded-full   h-8 w-8  flex items-center justify-center  bg-sky-500">
          <IoBagHandle className=" text-xl  text-white" />
        </div>
        <div className=" flex flex-col pl-3 justify-start">
          <span className=" text-xl font-light text-gray-400">Total Sales</span>
          <div className=" flex flex-row">
            <span className="  text-xl  font-semibold">$34525.60$</span>
            <div>
              <p className=" px-2 text-green-400 items-center text-xs">+ 234</p>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" rounded-full  h-8 w-8  flex items-center justify-center  bg-red-500">
          <IoBagHandle className=" text-2xl  text-white" />
        </div>
        <div className=" flex flex-col px-5  justify-start">
          <span className=" text-xl font-light text-gray-400">
            Total Expenses
          </span>
          <div className=" flex flex-row">
            <span className=" text-xl font-bold">$2245.60$</span>
            <div>
              <p className=" px-3 text-green-400 items-center text-xl"> - 24</p>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" rounded-full  h-8 w-8 flex items-center justify-center  bg-yellow-400 ">
          <FaUsers className=" text-xl  text-white" />
        </div>
        <div className=" flex flex-col px-5  justify-start">
          <span className=" text-xl font-light text-gray-400">
            Total Customers
          </span>
          <div className=" flex flex-row">
            <span className=" text-xl font-bold">1234</span>
            <div>
              <p className=" px-3 text-green-400 items-center text-xl"> +23 </p>
            </div>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className=" rounded-full  h-8 w-8  flex items-center justify-center   bg-green-500">
          <FaCartShopping className=" text-xl  text-white" />
        </div>
        <div className=" flex flex-col px-5  justify-start">
          <span className=" text-xl font-light text-gray-400">
            Total Orders
          </span>
          <div className=" flex flex-row">
            <span className=" text-xl font-bold">16432</span>
            <div>
              <p className=" px-3 text-green-400 items-center text-xl"> - 40</p>
            </div>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;
function BoxWrapper({ children }) {
  return (
    <div className=" bg-white rounded-md  border pl-2 py-2 border-gray-200 flex flex-1 items-center">
      {children}
    </div>
  );
}
