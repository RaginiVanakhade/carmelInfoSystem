// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="body flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-blue-200"> 
     <div className="container relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-[0 0 30px rgba(0,0,0,.2)">  
      <div className='form-box'>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" placeholder="Username" required />
          <div><FaUserCircle /></div>
        </div>
        <div className='input-box'>
          <input type="password" placeholder="Password" required />
          <div><FaLock /></div>
        </div>
        <div>
          <a href="#">Forgot Password ?</a>
        </div>
        <button type='submit' className='login-btn'>Login</button>
        <p>or login with social platforms</p>
        <div>
          <a href=""><FaGoogle /></a>
          <a href=""><FaFacebook /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaLinkedin /></a>
        </div>
      </div>
      <button onClick={() => navigate('/signup')}>Don't have an account ? Sign Up</button>
    </div>
    </div>

  )
}

export default Login