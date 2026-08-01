import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between rounded-lg border bg-white p-5 shadow-sm">
        <p className="text-gray-700 font-medium">
          Instant, zero-cost fund transfers with UPI
        </p>

        <div className="mt-4 flex gap-3 md:mt-0">
          <Link
            to=""
            className="rounded bg-green-500 px-5 py-2 text-white transition hover:bg-green-600"
          >
            Add Funds
          </Link>

          <Link
            to=""
            className="rounded bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Equity Section */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Equity
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <p>Available Margin</p>
              <p className="font-semibold text-green-600">₹4,043.10</p>
            </div>

            <div className="flex justify-between">
              <p>Used Margin</p>
              <p className="font-semibold">₹3,757.30</p>
            </div>

            <div className="flex justify-between">
              <p>Available Cash</p>
              <p className="font-semibold">₹4,043.10</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>

            <div className="flex justify-between">
              <p>Payin</p>
              <p>₹3,736.40</p>
            </div>

            <div className="flex justify-between">
              <p>Payout</p>
              <p>₹4,064.00</p>
            </div>

            <div className="flex justify-between">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>

            <div className="flex justify-between">
              <p>Delivery Margin</p>
              <p>₹0.00</p>
            </div>

            <div className="flex justify-between">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>

            <div className="flex justify-between">
              <p>Options Premium</p>
              <p>₹0.00</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p>Collateral (Liquid Funds)</p>
              <p>₹0.00</p>
            </div>

            <div className="flex justify-between">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>

            <div className="flex justify-between font-semibold">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="flex items-center justify-center rounded-lg border bg-white p-6 shadow-sm">
          <div className="text-center">
            <h3 className="mb-3 text-xl font-semibold text-gray-800">
              Commodity Account
            </h3>

            <p className="mb-6 text-gray-500">
              You don't have a commodity account.
            </p>

            <Link
              to=""
              className="rounded bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;