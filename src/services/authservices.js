import axios from "axios";
import {  AuthLogin } from '../api/auth'

const API_URL = AuthLogin

const login = async (uid, pwd) => {
  const params = new URLSearchParams();
  params.append("Uid", uid);
  params.append("Pwd", pwd);
  params.append("UsrType", "Admin");

  const response = await axios.post(API_URL, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const authCode = response.data?.data?.[0]?.AuthCode;
  if (authCode) {
    localStorage.setItem("authCode", authCode);
  }

  return response; // IMPORTANT
};

export default { login };
