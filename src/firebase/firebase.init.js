// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_7vRZkSaEP3dDBOV04KpE550u-l1ZBwE",
  authDomain: "coffee-store-4fbdb.firebaseapp.com",
  projectId: "coffee-store-4fbdb",
  storageBucket: "coffee-store-4fbdb.firebasestorage.app",
  messagingSenderId: "43434853108",
  appId: "1:43434853108:web:a7949a6a2c351b825094a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);