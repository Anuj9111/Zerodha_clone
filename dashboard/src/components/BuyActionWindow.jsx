import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const apiUrl = (import.meta.env.VITE_API_URL || "https://zerodha-clone-a3w8.onrender.com").replace(/\/$/, "");
      await axios.post(`${apiUrl}/newOrder`, {
        name: uid,
        qty: Number(stockQuantity) || 1,
        price: Number(stockPrice) || 0,
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (err) {
      console.error("Error submitting order:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="absolute bottom-0 left-[35%] z-50 w-[40%] bg-white border border-gray-300 rounded-lg shadow-2xl overflow-hidden">
      <div className="bg-blue-600 px-6 py-3 text-white font-semibold flex justify-between items-center">
        <span>Buy {uid}</span>
        <button onClick={handleCancelClick} className="text-white hover:text-gray-200 text-lg cursor-pointer">
          ✕
        </button>
      </div>

      <div className="p-6">
        <div className="flex gap-5">
          <fieldset className="border border-gray-300 p-2 rounded flex-1">
            <legend className="text-xs text-gray-500 px-1">Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              className="outline-none w-full text-base font-medium px-1"
            />
          </fieldset>

          <fieldset className="border border-gray-300 p-2 rounded flex-1">
            <legend className="text-xs text-gray-500 px-1">Price (₹)</legend>
            <input
              type="number"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              className="outline-none w-full text-base font-medium px-1"
            />
          </fieldset>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-t border-gray-200">
        <span className="text-xs text-gray-500">
          Margin approx: ₹{(Number(stockQuantity || 1) * Number(stockPrice || 0)).toFixed(2)}
        </span>

        <div className="space-x-3">
          <button
            disabled={submitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded transition cursor-pointer disabled:opacity-50"
            onClick={handleBuyClick}
          >
            {submitting ? "Placing..." : "Buy"}
          </button>

          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-5 py-2 rounded transition cursor-pointer"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;