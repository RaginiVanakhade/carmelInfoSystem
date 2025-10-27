import { useState } from "react";
import {
  FaUserCircle,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import "../style/login.css";

const Login = () => {
  // useState to manage which form is active
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleRegisterClick = () => {
    setIsSignUpActive(true);
  };

  const handleLoginClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className={`container ${isSignUpActive ? "active" : ""}`}>
      {/* ---------------- LOGIN FORM ---------------- */}
      <div className="form-box login">
        <form>
          <h1>Login</h1>
          <div className="input-box flex">
            <input type="text" placeholder="username" required />
            <i className="bx bx-user">
              <FaUserCircle />
            </i>
          </div>

          <div className="input-box flex">
            <input type="password" placeholder="password" required />
            <i className="bx bx-lock-alt">
              <FaLock />
            </i>
          </div>

          <div className="forgot-link">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <p>or login with social platforms</p>
          <div className="social-icons flex">
            <a href="#"><FaGoogle className="social-icon" /></a>
            <a href="#"><FaFacebook className="social-icon" /></a>
            <a href="#"><FaGithub className="social-icon" /></a>
            <a href="#"><FaLinkedin className="social-icon" /></a>
          </div>
        </form>
      </div>

      {/* ---------------- SIGNUP FORM ---------------- */}
      <div className="form-box signup">
        <form>
          <h1 className="signup">Sign Up</h1>
          <div className="input-box flex">
            <input type="text" placeholder="username" required />
            <i className="bx bx-user">
              <FaUserCircle />
            </i>
          </div>

          <div className="input-box flex">
            <input type="email" placeholder="email" required />
            <i className="bx bx-envelope">
              <FaEnvelope />
            </i>
          </div>

          <div className="input-box flex">
            <input type="password" placeholder="password" required />
            <i className="bx bx-lock-alt">
              <FaLock />
            </i>
          </div>

          <button type="submit" className="btn">
            Sign Up
          </button>

          <p>or Sign Up with social platforms</p>
          <div className="social-icons flex">
            <a href="#"><FaGoogle className="social-icon" /></a>
            <a href="#"><FaFacebook className="social-icon" /></a>
            <a href="#"><FaGithub className="social-icon" /></a>
            <a href="#"><FaLinkedin className="social-icon" /></a>
          </div>
        </form>
      </div>

      {/* ---------------- TOGGLE BOX ---------------- */}
      <div className="toggle-box">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Welcome!</h1>
          <p>Don't have an account?</p>
          <button className="btn signup-btn" onClick={handleRegisterClick}>
            Sign Up
          </button>
        </div>

        <div className="toggle-panel toggle-right">
          <h1>Welcome Back!</h1>
          <p>Already have an account?</p>
          <button className="btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
