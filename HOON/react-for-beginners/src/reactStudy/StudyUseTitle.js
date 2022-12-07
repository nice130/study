import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom"; 

const useTitle = (initialTitle) => {
  const [title,setTitle] = useState(initialTitle);
  const updateTitle= () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle,[title]);
  return setTitle;
}

const StudyUseTitle=()=> {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("Home")
  }, 5000);
  return (
    <div className="App">
      hi
    </div>
  );
}
export default StudyUseTitle;