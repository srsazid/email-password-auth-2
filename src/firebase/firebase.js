// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXii9A42r0W4h0yjimElVgrrnNORx7QoU",
  authDomain: "email-password-auth-2-9b7f0.firebaseapp.com",
  projectId: "email-password-auth-2-9b7f0",
  storageBucket: "email-password-auth-2-9b7f0.appspot.com",
  messagingSenderId: "445368409374",
  appId: "1:445368409374:web:07369fb7e07bae419c7d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
