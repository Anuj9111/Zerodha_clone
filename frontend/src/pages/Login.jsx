import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let apiUrl = (import.meta.env.VITE_API_URL || "https://zerodha-clone-a3w8.onrender.com").replace(/\/$/, "");
      if (apiUrl.includes("03wt")) {
        apiUrl = "https://zerodha-clone-a3w8.onrender.com";
      }
      const { data } = await axios.post(
        `${apiUrl}/login`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Login Response:", data);
      const { success, message, token, user } = data;
      if (success) {
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("user", typeof user === "string" ? user : user?.username || "");
        }
        handleSuccess(message || "Logged in successfully!");
        const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || "https://zerodha-clone-tj5v.vercel.app";
        setTimeout(() => {
          window.location.href = dashboardUrl;
        }, 1000);
      } else {
        handleError(message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login request error:", error);
      handleError(error.response?.data?.message || "Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold mb-8">Login Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md border border-gray-300 rounded-xl p-8 shadow-sm bg-white">
        <div>
          <label htmlFor="email" className="text-lg font-medium block mb-2">Email</label>
          <input
            className="border border-gray-300 w-full h-11 rounded-md px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            type="email"
            name="email"
            required
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-medium block mb-2">Password</label>
          <input
            className="border border-gray-300 w-full h-11 rounded-md px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            type="password"
            name="password"
            required
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-white bg-blue-600 font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
        <span className="text-sm text-center text-gray-600">
          Don't have an account? <Link className="text-blue-500 hover:underline font-medium" to={"/signup"}>Sign up</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;