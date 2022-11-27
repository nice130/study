import React, { useState } from "react";
import AppRouter from "./Router";
import myBase, { authService } from '../myBase'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()} by MINHO</footer>
    </>
  );
}

export default App;
