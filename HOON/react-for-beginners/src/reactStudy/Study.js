import React, {useState} from "react";
import ReactDOM from "react-dom";

const content = [
    {
        tab:"section 1",
        content:"Hi",
    },
    {
        tab:"section 2",
        content:"Hi2",
    }
];

 

const Study=()=> {
    const {currentItem,changeItem} = useTabs(0,content);
    return (
      <div className="App">
        {content.map((section,index)=>(
        <button onClick={()=>changeItem(index)}>{section.tab}</button>
        ))}
        <div>{currentItem.content}</div>
      </div>
    );
}
export default Study;