import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import myBase, { authService } from '../myBase'
import { onAuthStateChanged } from "firebase/auth";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObject, setUserObject] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObject(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
  })},[])
  return (
    <>
      { init ? <AppRouter isLoggedIn={isLoggedIn} userObject={userObject} /> : "Initializing..." }
      <footer>&copy; Nwitter {new Date().getFullYear()} by MINHO</footer>
    </>
  );
}

export default App;
