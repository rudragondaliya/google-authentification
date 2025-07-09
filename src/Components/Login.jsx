import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { Container } from "react-bootstrap";
import GoogleLoginBtn from "./GoogleLoginBtn";


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/home");
    } catch (error) {
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <Container- className="d-flex vh-100  justify-content-center align-items-center bg-dark">
      <div className="text-center p-5 glass-card text-white">
        <h2 className="mb-4">Welcome to MyApp</h2>
        <GoogleLoginBtn onClick={handleLogin} />
      </div>
    </Container->
  );
};

export default Login;

