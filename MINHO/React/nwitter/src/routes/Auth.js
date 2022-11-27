import React, { useState } from "react";
import { authService} from "../myBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e) => {
    const {target : {name,value}} = e;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let data;
      if (newAccount)  {
        data = await createUserWithEmailAndPassword(authService, email,password);
      } else {
        data = await signInWithEmailAndPassword(authService, email,password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          type="text"
          placeholder="Email"
          required
          onChange={onChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
          onChange={onChange}
        />
        <input 
        type="submit" 
        value={newAccount ? 'Create Account':'Login'}
        />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
