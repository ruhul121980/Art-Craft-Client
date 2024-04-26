// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAACNN2wNbRbF6b9t1eAphBMu-_4LOoQ4Y",
  authDomain: "craft-efa7b.firebaseapp.com",
  projectId: "craft-efa7b",
  storageBucket: "craft-efa7b.appspot.com",
  messagingSenderId: "366063824107",
  appId: "1:366063824107:web:3ccda1bb013b0e5eb4e2ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



