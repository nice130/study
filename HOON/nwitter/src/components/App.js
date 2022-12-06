import React, { useState, useEffect} from "react";
import AppRouter from "./Router";
import {authService} from "../fbase";
import { getAuth, onAuthStateChanged, updateCurrentUser, updateProfile } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [newName, setNewName] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
          });
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({...user});
  }
  return (
    <>
      {init ?(
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} />
        ):(
          "Initializing..."
        )}
      <footer>&copy; {new Date().getFullYear()}Hwitter</footer>
    </>
  )
}

export default App;
