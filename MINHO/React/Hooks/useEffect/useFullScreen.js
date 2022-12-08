import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const [fullCheck, setFullCheck] = useState(false);
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full!!!" : "We are small!!!");
    setFullCheck(isFull);
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img src="https://blog.kakaocdn.net/dn/yqShN/btrFibH72L5/4kZjRM9TIzBO7GDljjpX71/img.jpg" />
        {fullCheck && <button onClick={exitFull}>Exit Full!</button>}
      </div>
      <button onClick={triggerFull}>Make Full!</button>
    </div>
  );
}
