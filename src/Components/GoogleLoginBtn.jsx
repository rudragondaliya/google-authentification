// src/components/GoogleLoginButton.jsx
import React from "react";
import { FcGoogle } from "react-icons/fc";
// import "./GoogleLoginButton.css";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button className="google-login-btn" onClick={onClick}>
      <FcGoogle size={22} className="me-2 icon" />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
