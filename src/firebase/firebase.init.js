// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1wTyrmNMvelXNEiyqgcR2MoPoG53k0OE",
  authDomain: "email-login-first-projec-c0542.firebaseapp.com",
  projectId: "email-login-first-projec-c0542",
  storageBucket: "email-login-first-projec-c0542.firebasestorage.app",
  messagingSenderId: "1088478143104",
  appId: "1:1088478143104:web:5f09fb13ca979de36d3c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;