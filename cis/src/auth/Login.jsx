import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import authService from "../services/authservices";
import vendor from "../../public/assets/vendor.webp";
import customer from "../../public/assets/customer.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Login = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const info = [
    { id: 1, details: "First information" },
    { id: 2, details: "Second information" },
    { id: 3, details: "Third information" },
    { id: 4, details: "Third information" },
    { id: 5, details: "Third information" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % info.length);
    }, 1000); // 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? info.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === info.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await authService.login(uid, pwd);
      if (res.data.status === 200) {
        navigate("/dashboard");
      } else {
        setError("Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg  grid grid-cols-1 md:grid-cols-2">
        {/* <img src="" alt="companylogo" /> */}

        {/* Left Image with Gray Background */}
        <div className="hidden md:flex bg-gray-200 p-6 relative">
          {/* Images */}
          <img
            src={vendor}
            alt="vendor"
            className="w-40 h-40 rounded-xl absolute mt-4 rotate-[-9deg] "
          />
          <img
            src={customer}
            alt="customer"
            className="w-40 h-40 rounded-xl absolute mt-24 ml-36 rotate-[8deg] "
          />

          {/* Content */}
          <div className="relative top-80 text-center w-full">
            <div className=" font-semibold mb-4 text-gray-500">
              {info[index].details}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              {/* Left Arrow */}
              <button onClick={prev}>
                <IoIosArrowBack size={16} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {info.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === i ? "bg-black" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Right Arrow */}
              <button onClick={next}>
                <IoIosArrowForward size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center p-10">
          <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome Back!
              </h2>
              <p className="text-gray-500 mt-2">
                Start managing your finance faster and better
              </p>
            </div>

            {error && (
              <div className="bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm text-center">
                {error}
              </div>
            )}

            {/* User ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User ID
              </label>
              <div className="relative">
                <FaUserCircle
                  size={23}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Enter your user ID"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none segu-ui"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 bg-gray-100 rounded-lg focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <IoEyeOutline className="text-lg" />
                  ) : (
                    <FaRegEyeSlash className="text-lg" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Login
            </button>

            <p className="text-center text-xs text-gray-400">
              © 2025 Your Company
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
