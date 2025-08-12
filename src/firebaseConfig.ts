// Import the Firebase modules you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyBiYiI15wBaj2Gm-AATs7n-1U9ZECjX4Dk",
  authDomain: "contact-manager-6ebe6.firebaseapp.com",
  projectId: "contact-manager-6ebe6",
  storageBucket: "contact-manager-6ebe6.firebasestorage.app",
  messagingSenderId: "470082442443",
  appId: "1:470082442443:web:2fb75a445460d49e06374e",
  measurementId: "G-L92DSC31FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
