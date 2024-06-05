import React from "react";
import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />
      <div className="flex lg:flex-row px-2 gap-4  w-full sm:flex flex-col">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className="flex md:flex-col w-full gap-4 px-2 sm:flex flex-col lg:flex-row">
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
}

export default Dashboard;
