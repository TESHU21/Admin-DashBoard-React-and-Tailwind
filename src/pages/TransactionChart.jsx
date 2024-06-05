import React from "react";
import data from "../lib/data";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function TransactionChart() {
  return (
    <div className=" h-[16rem] bg-white p-4  rounded-md border  border-gray-200 flex flex-col flex-auto justify-center">
      <strong className=" text-gray-700 font-medium  ">Transaction</strong>
      <div className="  w- full  mt-3 first-line:text-xs justify-center">
        <BarChart
          width={800}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip shared={false} trigger="click" />
          <Legend />
          <Bar dataKey="Income" fill="#8884d8" />
          <Bar dataKey="Expense" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
}

export default TransactionChart;
