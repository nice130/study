import { async } from "@firebase/util";
import React, { useState } from "react";
import { signInWithPopup,GithubAuthProvider,GoogleAuthProvider,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {authService, firebaseInstance} from "fbase";

const Auth = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [newAccount,setNewAccount] = useState(true);
    const [error,setError] = useState("");
    const onChange = (e) =>{
        const {target : {name,value}}=e;
        if(name ==="email"){
            setEmail(value)
        }else if(name==="password"){
            setPassword(value);
        }
    }
    
    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            let data;
            const auth = getAuth();
            if(newAccount){
                data = await createUserWithEmailAndPassword(auth, email, password);
            }else{
                data = await signInWithEmailAndPassword(auth, email, password);
            }
            console.log(data);
        }catch (error){
            setError(error.message);
        }
        
    };

    const toggleAccount = () => setNewAccount((prev)=>!prev);
    const onSocialClick = async(e) =>{
        const{target : {name},
        } = e;
        let provider;
        if(name==="google"){
            provider = new GoogleAuthProvider();
        }else if(name==="github"){
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService,provider);
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email" required onChange={onChange} value={email}/>
                <input name="password" type="password" placeholder="Password" required onChange={onChange} value={password}/>
                <input type="submit" value={newAccount ? "Create Account" : "Log In"}/>    
                 {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with GitHub</button>
            </div>
        </div>
    );
};
export default Auth;