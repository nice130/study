// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjqq5X1_kP9n9edEkUd1K6h6xkl8uRn4",
  authDomain: "nwitter-9fe3f.firebaseapp.com",
  projectId: "nwitter-9fe3f",
  storageBucket: "nwitter-9fe3f.appspot.com",
  messagingSenderId: "650143192275",
  appId: "1:650143192275:web:bf092d9c4465d060c27026"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;