import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom"; 

const usePreventLeave = () => {
  const listener = (e) =>{
    e.preventDefault();
    e.returnValue= ""; 
  }
  const enablePreve = () => window.addEventListener("beforeunload");
  const disablePreve = () => 
    window.addEventListener("beforeunload",listener);
    return {enablePreve,disablePreve};
}

const Study=()=> {
  const {enablePreve,disablePreve} = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>Protect</button>
    </div>
  );
}
export default Study;