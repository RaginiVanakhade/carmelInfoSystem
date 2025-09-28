// // first login page
// import React, { useState } from "react";
// import { FaUserCircle, FaLock, FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Login = () => {
//   const [isLoginActive, setIsLoginActive] = useState(true);

//   const handleToggle = () => {
//     setIsLoginActive(!isLoginActive);
//   };

//   return (
//     <div className="body flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200">
//       <div className={`container relative md:w-[850px] sm:h-[550px]  h-[550px] md:h-[550px] sm:w-[650px] w-[550px] bg-white rounded-[30px] shadow-xl overflow-hidden flex ${!isLoginActive ? "active" : ""}`}>

//         {/* Login Form */}
//         <div className={`form-box z-[10] p-10 absolute w-1/2 h-full bg-white flex flex-col items-center justify-center text-center transition-all duration-700
//           ${isLoginActive ? "right-0 opacity-100" : "right-[-50%] opacity-0"}`}>
//           <h1 className="text-[30px] mb-6 font-heading">Login</h1>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px] font-display"
//             />
//             <FaUserCircle className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px] font-display"
//             />
//             <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="forgot-pass my-[-10px] w-full text-right mb-4">
//             <a href="#" className="text-blue-600 hover:underline ">Forgot Password?</a>
//           </div>
//           <button
//             type="submit"
//             className="w-full h-[48px] bg-[#7494ec] rounded-[8px] text-white text-[16px] font-semibold mb-4"
//           >
//             Login
//           </button>
//           <p className="text-[14.5px] my-2 text-gray-600 font-display">or login with social platforms</p>
//           <div className="social-icons flex justify-center mt-2 flex-wrap">
//             <FaGoogle className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaFacebook className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaGithub className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaLinkedin className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//           </div>
//         </div>

//         {/* Signup Form */}
//         <div className={`form-box z-[10] p-10 absolute w-1/2 h-full bg-white flex flex-col items-center justify-center text-center transition-all duration-700
//           ${isLoginActive ? "right-[-50%] opacity-0" : "right-0 opacity-100"}`}>
//           <h1 className="text-[30px] mb-6">Sign Up</h1>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px] font-display"
//             />
//             <FaUserCircle className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px] font-display"
//             />
//             <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px] font-display"
//             />
//             <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <button
//             type="submit"
//             className="w-full h-[48px] bg-[#7494ec] rounded-[8px] text-white text-[16px] font-semibold mb-4"
//           >
//             Sign Up
//           </button>
//           <p className="text-[14.5px] my-2 text-gray-600">or signup with social platforms</p>
//           <div className="social-icons flex justify-center mt-2">
//             <FaGoogle className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaFacebook className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaGithub className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//             <FaLinkedin className="p-1 border-2 border-[#ccc] rounded-4xl text-3xl mx-2 cursor-pointer text-black" />
//           </div>
//         </div>

//         {/* Toggle Panel */}
//         <div className={`toggle-box absolute w-[50%] h-[100%] bg-[#7494ec] text-white flex flex-col justify-center items-center right-0 transition-all duration-700 rounded-bl-full`}>
//           <h1 className="text-[30px] mb-4">{isLoginActive ? "Hello, Welcome!" : "Welcome Back!"}</h1>
//           <p className="mb-4">{isLoginActive ? "Don't have an account?" : "Already have an account?"}</p>
//           <button
//             className="w-[160px] h-[46px] bg-transparent border-2 border-white rounded-md text-white font-medium"
//             onClick={handleToggle}
//           >
//             {isLoginActive ? "Sign Up" : "Login"}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;




// second login page 
import React from 'react'
import { FiUnlock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-[#141830] via-[#202339] to-[#353749]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 w-80 sm:w-96">
        <h2 className="text-center text-2xl font-semibold text-white mb-8">User Login</h2>
        
        <form action="">
          {/* Username field */}
          <div className="relative mb-6">
            <input
              type="text"
              id="username"
              className="w-full h-12 pl-12 pr-4 rounded-3xl bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F5269] font-display"
              placeholder="Username"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
              <FaRegUser size={22} />
            </div>
          </div>

          {/* Password field */}
          <div className="relative mb-6">
            <input
              type="password"
              id="password"
              className="w-full h-12 pl-4 pr-12 rounded-3xl bg-transparent border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4F5269] font-display"
              placeholder="Password"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
              <FiUnlock size={22} />
            </div>
          </div>

          {/* Login button */}
          <div className="mt-6">
            <input
              type="submit"
              id="login"
              value="Login"
              className="w-full h-12 rounded-3xl bg-[#202339]/80 hover:bg-[#4F5269] text-white font-medium cursor-pointer transition"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
