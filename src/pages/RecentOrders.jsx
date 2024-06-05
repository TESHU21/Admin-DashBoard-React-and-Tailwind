import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../utils";
const recentorderData = [
  {
    id: "1",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Anthonove",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "ASIAN ,CA 90017",
  },
  {
    id: "2",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Mr Ramafusa D",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "Los Angeles,CA 90017",
  },
  {
    id: "3",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Sheraga h.",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "SHIPPED",
    shipment_address: "Los Angeles,CA 90017",
  },
  {
    id: "4",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A.Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "DELIVERED",
    shipment_address: "Africa,CA 90017",
  },
  {
    id: "5",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A.Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "ETH,CA 90017",
  },
  {
    id: "6",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A.Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "SHIPPED",
    shipment_address: "Sydeny,CA 90017",
  },
  {
    id: "7",
    prdoduct_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A.Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles,CA 90017",
  },
];

function RecentOrders() {
  return (
    <div className=" bg-white px-4 pt-3 pb-4  rounded-sm  border border-gray-400 flex-1">
      <strong>Recent Order</strong>
      <div className="mt-3  justify-center">
        <table className=" w-full text-gray-700 ">
          <thead>
            <tr>
              <td>ID</td>
              <td> Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Address</td>
              <td>Order Statusl</td>
            </tr>
          </thead>
          <tbody>
            {recentorderData.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/orders/${order.id}`}>#{order.id}</Link>
                </td>

                <td>
                  <Link to={`/products/${order.prdoduct_id}`}>
                    {order.prdoduct_id}
                  </Link>
                </td>
                <td>{order.customer_name}</td>

                <td> {new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
