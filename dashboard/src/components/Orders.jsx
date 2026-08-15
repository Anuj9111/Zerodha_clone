import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
import axios from "axios";

const Orders = () => {
  const[orders,setorders]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/allOrders").then((res)=>{
       setorders(res.data);
    })
    .catch((error)=>{console.log(error);})
  },[])


 if (orders.length === 0) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-10 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            No Orders
          </h2>

          <p className="mb-6 text-gray-500">
            You haven't placed any orders today.
          </p>

          <Link
            to="/"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white transition duration-200 hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    );
  }

  // Orders exist
  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Your Orders
      </h2>

      <div className="overflow-x-auto rounded-lg bg-white shadow-md">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Quantity</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Mode</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b">
                <td className="px-6 py-4 font-medium">
                  {order.name}
                </td>

                <td className="px-6 py-4">
                  {order.qty}
                </td>

                <td className="px-6 py-4">
                  ₹{order.price}
                </td>

                <td
                  className={`px-6 py-4 font-semibold ${
                    order.mode === "BUY"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;