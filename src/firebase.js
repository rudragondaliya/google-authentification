// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bVJ9srFEE_FDW8iVNTFv12RXhUW926E",
  authDomain: "le-auth-645ae.firebaseapp.com",
  projectId: "le-auth-645ae",
  storageBucket: "le-auth-645ae.firebasestorage.app",
  messagingSenderId: "795818077370",
  appId: "1:795818077370:web:9b987f2a82b159c8e96683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}