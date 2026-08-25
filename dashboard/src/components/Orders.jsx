import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let apiUrl = (import.meta.env.VITE_API_URL || "https://zerodha-clone-a3w8.onrender.com").replace(/\/$/, "");
    if (apiUrl.includes("03wt")) {
      apiUrl = "https://zerodha-clone-a3w8.onrender.com";
    }
    axios
      .get(`${apiUrl}/allOrders`)
      .then((res) => {
        setOrders(Array.isArray(res.data) ? res.data : []);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-10 text-center shadow-md border border-gray-100 max-w-sm">
          <h2 className="mb-3 text-2xl font-semibold text-gray-800">
            No Orders
          </h2>
          <p className="mb-6 text-gray-500 text-sm">
            You haven't placed any orders today.
          </p>
          <Link
            to="/"
            className="inline-block rounded-md bg-blue-600 px-6 py-2.5 text-white font-medium transition duration-200 hover:bg-blue-700 shadow-xs"
          >
            Get Started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Your Orders ({orders.length})
      </h2>

      <div className="overflow-x-auto rounded-lg bg-white shadow-xs border border-gray-200">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr className="text-sm text-gray-600">
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Quantity</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={order._id || idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {order.name}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {order.qty}
                </td>
                <td className="px-6 py-4 text-gray-700 font-medium">
                  ₹{Number(order.price || 0).toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    order.mode === "BUY" ? "text-green-600" : "text-red-600"
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