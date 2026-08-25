import { useState, useEffect } from "react";
import axios from "axios";
import { Vertical } from "./Vertical.jsx";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = (import.meta.env.VITE_API_URL || "https://zerodha-clone-03wt.onrender.com").replace(/\/$/, "");
    axios
      .get(`${apiUrl}/allHoldings`)
      .then((res) => {
        setAllHoldings(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching holdings:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stocks) => stocks.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <div className="h-full w-full p-6">
      <h3 className="text-2xl mb-6 font-bold text-gray-800">
        Holdings ({allHoldings.length})
      </h3>

      {loading ? (
        <p className="text-gray-500 py-6">Loading holdings data...</p>
      ) : (
        <div className="overflow-x-auto mb-10 bg-white rounded-lg shadow-xs border border-gray-200">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-gray-600 text-sm">
                <th className="py-3 px-4 font-semibold">Instrument</th>
                <th className="py-3 px-4 text-center font-semibold">Qty.</th>
                <th className="py-3 px-4 text-center font-semibold">Avg. Cost</th>
                <th className="py-3 px-4 text-center font-semibold">LTP</th>
                <th className="py-3 px-4 text-center font-semibold">Cur. Val</th>
                <th className="py-3 px-4 text-center font-semibold">P&amp;L</th>
                <th className="py-3 px-4 text-center font-semibold">Net Chg.</th>
                <th className="py-3 px-4 text-center font-semibold">Day Chg.</th>
              </tr>
            </thead>
            <tbody>
              {allHoldings.map((stocks, index) => {
                const currValue = stocks.price * stocks.qty;
                const pnl = currValue - stocks.avg * stocks.qty;
                const isProfit = pnl >= 0;

                return (
                  <tr className="border-b border-gray-100 hover:bg-gray-50" key={stocks._id || index}>
                    <td className="py-3 px-4 font-medium text-gray-800">{stocks.name}</td>
                    <td className="py-3 px-4 text-center text-gray-700">{stocks.qty}</td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {Number(stocks.avg || 0).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {Number(stocks.price || 0).toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-gray-700">
                      {currValue.toFixed(2)}
                    </td>
                    <td className={`py-3 px-4 text-center font-semibold ${isProfit ? "text-green-600" : "text-red-500"}`}>
                      {pnl.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 text-center text-green-600">
                      {stocks.net}
                    </td>
                    <td className="py-3 px-4 text-center text-green-600">
                      {stocks.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {allHoldings.length > 0 && <Vertical data={data} />}
    </div>
  );
}

export default Holdings;
