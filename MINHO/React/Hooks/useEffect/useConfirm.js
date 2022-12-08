import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";





const useConfirm = (message = "", confirmFn, cancleFn) => {
  if (!confirmFn || typeof confirmFn !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      reject();
    }
  };
  return confirmAction;
};


