import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext.jsx";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://zerodha-clone-03wt.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="absolute bottom-0 left-[35%] z-50 w-[40%] h-[63%] bg-gray-100 border rounded shadow-lg">
      <div className="bg-white p-6">
        <div className="flex gap-5">
          <fieldset className="border p-2 rounded">
            <legend>Qty.</legend>

            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              className="outline-none"
            />
          </fieldset>

          <fieldset className="border p-2 rounded">
            <legend>Price</legend>

            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              className="outline-none"
            />
          </fieldset>
        </div>
      </div>

      <div className="flex justify-between items-center p-5">
        <span>Margin required ₹140.65</span>

        <div className="space-x-2">
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleBuyClick}
          >
            Buy
          </Link>

          <Link
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;