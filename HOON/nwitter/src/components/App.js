import React, { useState, useEffect} from "react";
import AppRouter from "./Router";
import {authService} from "../fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ?(
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
        ):(
          "Initializing..."
        )}
      <footer>&copy; {new Date().getFullYear()}Hwitter</footer>
    </>
  )
}

export default App;
