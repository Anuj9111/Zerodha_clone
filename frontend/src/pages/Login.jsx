import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
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
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-full w-full flex flex-col">
      <h2 className="text-4xl font-bold m-auto my-10 ">Login Account</h2>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-10 m-auto w-120 border border-black rounded-xl h-100 p-15 mb-20">
        <div >
          <label htmlFor="email" className="text-2xl">Email </label>
          <input className="border border-black w-90 h-10 rounded-sm px-5"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-2xl">Password</label>
          
          <input className="border border-black w-90 h-10 rounded-sm px-5"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <div className="m-auto">
          <button type="submit" className=" border-1 border-blak text-white bg-blue-600 text-xl  rounded-sm m-auto hover:bg-white hover:text-black">Submit</button>

        </div>
        <span className="text-xl m-auto">
          Already have an account? <Link className="text-blue-500 hover:text-black"  to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;