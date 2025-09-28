// import React, { useState } from "react";
// import { FaUserCircle, FaLock, FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const Login = () => {
//   const [isLoginActive, setIsLoginActive] = useState(true);

//   const handleToggle = () => {
//     setIsLoginActive(!isLoginActive);
//   };

//   return (
//     <div className="body flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200">
//       <div className={`container relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-xl overflow-hidden flex ${!isLoginActive ? "active" : ""}`}>

//         {/* Login Form */}
//         <div className={`form-box z-[10] p-10 absolute w-1/2 h-full bg-white flex flex-col items-center justify-center text-center transition-all duration-700
//           ${isLoginActive ? "right-0 opacity-100" : "right-[-50%] opacity-0"}`}>
//           <h1 className="text-[30px] mb-6">Login</h1>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px]"
//             />
//             <FaUserCircle className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px]"
//             />
//             <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="forgot-pass my-[-10px] w-full text-right mb-4">
//             <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
//           </div>
//           <button
//             type="submit"
//             className="w-full h-[48px] bg-[#7494ec] rounded-[8px] text-white text-[16px] font-semibold mb-4"
//           >
//             Login
//           </button>
//           <p className="text-[14.5px] my-2 text-gray-600">or login with social platforms</p>
//           <div className="social-icons flex justify-center mt-2">
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
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px]"
//             />
//             <FaUserCircle className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px]"
//             />
//             <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]" />
//           </div>
//           <div className="input-box relative flex w-full my-2.5">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full rounded-[8px] p-[13px] bg-[#eee] outline-none text-[16px] font-medium pr-[50px]"
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



import React from 'react'
import { FaUserCircle, FaLock, FaGoogle, FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// colors 
// btn = rgba(#141830) = PRIMANY BRAND
// btn = rgba(202339) = BUTTON
// btn = rgba(353749) = BACKGROUND
// btn = rgba(4F5269) = HOVER BTN AND OTHER EFFECTS
// btn = rgba(607086) = TEXT



const Login = () => {
  return (
    <div className="md:h-screen sm:h-screen h-screen md:w-screen sm:w-screen w-screen items-center flex justify-center">
     <div className='border w-76 sm:w-86 md:w-96 h-96 sm:h-96 md:h'>
       <div className='items-center flex justify-center mt-10' ><FaUserCircle  size={70}/></div>
      <h2 className='flex justify-center items-center mt-6'>User Login</h2>
      <div className='flex items-center justify-center mt-6'>
         <form action="">
        <div className=''>
          <label htmlFor="username" className='mt-1'>Username</label><br />
          <input type="text" id='username' className='w-76 border' />
        </div>
        <div cl>
          <label htmlFor="password" className='mt-1'>Password</label><br />
          <input type="password" id='password' className='w-76 border' />
        </div>
        <div className='mt-4 flex justify-center items-center'>
    <input type="submit" id="login" value="Login" />
        </div>
      </form>
      </div>
     </div>
    </div>
  )
}

export default Login