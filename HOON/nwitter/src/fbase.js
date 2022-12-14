import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDwUrIMffrrTuqaIrbFtEBJ94gIn3fgnCI",
    authDomain: "nwitter-e91b0.firebaseapp.com",
    projectId: "nwitter-e91b0",
    storageBucket: "nwitter-e91b0.appspot.com",
    messagingSenderId: "183970220224",
    appId: "1:183970220224:web:3577885baf3f9b4a8bc525"
  };

  const app = initializeApp(firebaseConfig);

  export const firebaseInstance = getAuth;
  export const authService = getAuth();
  export const dbService = getFirestore();
  export const storageService = getStorage();