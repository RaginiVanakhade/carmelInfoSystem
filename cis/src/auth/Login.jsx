import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authservices";

const Login = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
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
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="User ID"
        value={uid}
        onChange={(e) => setUid(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
