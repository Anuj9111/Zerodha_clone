import zerodha from "../../assets/TradeX.png";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-18 bg-white border-b border-gray-200 z-50 px-8 flex items-center justify-between shadow-xs">
      <div>
        <Link to="/">
          <img className="w-[160px] h-auto object-contain" src={zerodha} alt="logo" />
        </Link>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li>
            <Link className="text-[17px] text-gray-700 hover:text-blue-600 transition font-medium" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-[17px] text-gray-700 hover:text-blue-600 transition font-medium" to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="text-[17px] text-gray-700 hover:text-blue-600 transition font-medium" to="/product">
              Product
            </Link>
          </li>
          <li>
            <Link className="text-[17px] text-gray-700 hover:text-blue-600 transition font-medium" to="/support">
              Support
            </Link>
          </li>
          <li>
            <Link className="text-[17px] text-gray-700 hover:text-blue-600 transition font-medium" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link
              className="text-[16px] bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
              to="/signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}