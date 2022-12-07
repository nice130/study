import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom"; 

const useClick = onClick=>{
  // if(typeof onClick !== "function"){
  //   return;
  // }
  const element = useRef();
  useEffect(()=>{
    console.log(element.current);
    if(element.current){
      element.current.addEventListener("click",onClick);
    }
    return () => {
      element.current.removeEventListener("click",onClick);
    }
  },[]);
  return element;
}

const StudyUseClick=()=> {
  const sayHello = () => console.log("say hello)");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}
export default StudyUseClick;