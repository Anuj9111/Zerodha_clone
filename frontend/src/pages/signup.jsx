import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password, username } = inputValue;

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
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = (import.meta.env.VITE_API_URL || "https://zerodha-clone-a3w8.onrender.com").replace(/\/$/, "");
      const { data } = await axios.post(
        `${apiUrl}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, token } = data;
      if (success) {
        if (token) {
          localStorage.setItem("token", token);
        }
        handleSuccess(message || "Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      handleError(error.response?.data?.message || "Server error during signup. Please try again.");
    } finally {
      setLoading(false);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold mb-8">Signup Account</h2>
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
          <label htmlFor="username" className="text-lg font-medium block mb-2">Username</label>
          <input
            className="border border-gray-300 w-full h-11 rounded-md px-4 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            type="text"
            name="username"
            required
            value={username}
            placeholder="Enter your username"
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
          {loading ? "Creating Account..." : "Submit"}
        </button>
        <span className="text-sm text-center text-gray-600">
          Already have an account? <Link className="text-blue-500 hover:underline font-medium" to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;