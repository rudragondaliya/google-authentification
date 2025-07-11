import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = ({ onClick }) => {
  return (
    <button className="google-login-btn" onClick={onClick}>
      <FcGoogle size={22} className="me-2 icon" />
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;
