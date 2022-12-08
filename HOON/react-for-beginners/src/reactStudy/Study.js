import React, {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom"; 

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  return { element, triggerFull };
};

const Study=()=> {
  const { element, triggerFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <img
        ref={element}
        src="https://firebasestorage.googleapis.com/v0/b/nwitter-e91b0.appspot.com/o/m3mqPI7wDyXwhzq8XgiFzCSYEu02%2Fa973d2f9-ddaa-4385-879e-683bfbb522db?alt=media&token=087cc561-1be1-493e-9fde-2b0303b04cfe"
      />
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
export default Study;