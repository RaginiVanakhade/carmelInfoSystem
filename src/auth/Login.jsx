import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import authService from "../services/auth.services";


const Login = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
  <div className="min-h-screen w-full bg-gray-100 relative">
    {/* Blue Header Background */}
    <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-500"></div>

    {/* Login Card */}
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl px-10 py-12">
        
        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sign In
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
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
            <label className="block text-sm text-gray-600 mb-1">
              User ID
            </label>
            <div className="relative">
              <FaUserCircle
                size={22}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Enter your user ID"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
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
                className="w-full pl-10 pr-10 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium transition"
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
