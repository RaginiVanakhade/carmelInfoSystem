// import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const SignUp = () => {
  // const navigate = useNavigate()
  return (
    <div className="body flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200"> 
     <div className="container relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-[0 0 30px rgba(0,0,0,.2)">  
      <div className='form-box p-[40px] absolute w-[50%] h-[100%] bg-amber-200 right-0 flex items-center justify-center text-center '>
        <form action={''} className='w-[100%] flex flex-col items-center'>
        <h1 className='text-[30px]'>Sign Up</h1>
        <div className='input-box relative m-[30px 0] flex m-2.5 '>
          <input type="text" placeholder="Username" required className='w-[100%] rounded-[8px] p-[13px] bg-[#eee] border-none outline-none text-[16px] font-medium pt-[13px] pr-[50px] pb-[13px] pl-[20px] ' />
          <FaUserCircle className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]"  />
        </div>
        <div className='input-box relative m-[30px 0] flex  m-2.5'>
          <input type="email" placeholder="Email" required className='w-[100%] rounded-[8px] p-[13px] bg-[#eee] border-none outline-none text-[16px] font-medium pt-[13px] pr-[50px] pb-[13px] pl-[20px] ' />
          <FaEnvelope className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]"  />
        </div>
        <div className='input-box relative m-[30px 0] flex  m-2.5'>
          <input type="password" placeholder="Password" required className='w-[100%] rounded-[8px] p-[13px] bg-[#eee] border-none outline-none text-[16px] font-medium pt-[13px] pr-[50px] pb-[13px] pl-[20px] ' />
          <FaLock className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[20px] text-[#888]"  />
        </div>
    <button 
  type="submit" 
  className="w-full h-[48px] bg-[#7494ec] rounded-[8px] shadow-[0_0_10px_rgba(0,0,0,0.1)] border-0 cursor-pointer text-white text-[16px] font-semibold"
>
  SignUp
</button>
       <p className="text-[14.5px] my-[15px] text-center text-gray-600">
  or signup with social platforms
</p>
        <div className="social-icons flex">
          <a href="" className="p-2.5 border-2 border-[#ccc] rounded-md text-2xl no-underline my-0 mx-2"><FaGoogle /></a>
          <a href="" className="p-2.5 border-2 border-[#ccc] rounded-md text-2xl no-underline my-0 mx-2"><FaFacebook /></a>
          <a href="" className="p-2.5 border-2 border-[#ccc] rounded-md text-2xl no-underline my-0 mx-2"><FaGithub /></a>
         <a 
  href="#" 
  className="p-2.5 border-2 border-[#ccc] rounded-md text-2xl no-underline my-0 mx-2"
>
  <FaLinkedin />
</a>
        </div>
        </form>
      </div>
      {/* <button onClick={() => navigate('/signup')}>Don't have an account ? Sign Up</button> */}
    </div>
    </div>

  )
}

export default SignUp