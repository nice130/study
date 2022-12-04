import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const content = [
  {
    tab: "Section1",
    content: "This is content of the Section No.1"
  },
  {
    tab: "Section2",
    content: "This is content of the Section No.2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currIndex, setCurrIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currItem: allTabs[currIndex],
    changeItem: setCurrIndex
  };
};

export default function App() {
  const { currItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((item, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {item.tab}
        </button>
      ))}
      <div>{currItem.content}</div>
    </div>
  );
}

// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>increment</button>
//         <button onClick={this.decrementItem}>decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
// }

// export default function App() {
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);
//   console.log(item);
//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={incrementItem}>increment</button>
//       <button onClick={decrementItem}>decrement</button>
//     </div>
//   );
// }
// const useInput = (initValue, validator) => {
//   const [value, setValue] = useState(initValue);
//   const onChange = (e) => {
//     const { value } = e.target;
//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }
//     if (willUpdate) {
//       setValue(value);
//     }
//   };
//   return { value, onChange };
// };
// export default function App() {
//   const maxLength = (value) => !value.includes("@");
//   const name = useInput("Mr.", maxLength);
//   console.log(name);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" value={name.value} onChange={name.onChange} />
//     </div>
//   );
// }
