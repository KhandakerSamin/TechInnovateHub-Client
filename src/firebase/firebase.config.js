// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC74C0eLJz2zZWL1UJEBtnGwIw6Q8whPo8",
  authDomain: "techinnovatehub-fd393.firebaseapp.com",
  projectId: "techinnovatehub-fd393",
  storageBucket: "techinnovatehub-fd393.appspot.com",
  messagingSenderId: "61855621000",
  appId: "1:61855621000:web:b747b2679dc1c7a9a7a43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;