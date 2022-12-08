import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom"; 

const useNetwork = onChange => {
  const {status,setStatus} = useState(navigator.onLine);
  const handleChange = ()=>{
    if(typeof onChange ==="function"){
      onchange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(()=>{
    window.addEventListener("online",handleChange);
    window.addEventListener("offline",handleChange);
    return ()=>{
      window.removeEventListener("online",handleChange);
      window.removeEventListener("offline",handleChange);
    }
  });
  return status;
}

const Study=()=> {
  const onLine = useNetwork();
  return (
    <div className="App">
      <h1>{onLine ? "offline":"Online"}</h1>
    </div>
  );
}
export default Study;