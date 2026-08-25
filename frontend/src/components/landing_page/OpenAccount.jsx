import { Link } from "react-router-dom";

export function OpenAccounts() {
  return (
    <div className="w-full py-16 px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">Open a Zerodha Account</h1>
      <p className="text-lg md:text-xl mt-4 text-gray-500 max-w-2xl">
        Modern platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades
      </p>
      <Link
        to="/signup"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8 py-3 rounded-md mt-6 transition shadow-sm"
      >
        Sign Up Now
      </Link>
    </div>
  );
}