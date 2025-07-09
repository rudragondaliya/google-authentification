import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Button } from "react-bootstrap";


const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    user && (
      <div className="home-container d-flex justify-content-center align-items-center">
        <div className="glass-card text-center p-4">
          <img
            src={user.photoURL}
            alt="Profile"
            className="rounded-circle profile-img mb-3"
          />
          <h3 className="mb-1">{user.displayName}</h3>
          <p className="text-white">{user.email}</p>
          <Button variant="outline-light" className="mt-3 px-4" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    )
  );
};

export default Home;
