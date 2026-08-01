import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
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
};

export default Orders;