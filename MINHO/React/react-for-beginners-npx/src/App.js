// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("I run all the time");
  const OnlyOnce = () => {
    console.log("CALL THE API...");
  };
  useEffect(() => {
    OnlyOnce();
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
    console.log("SEARCH FOR", keyword);
  }, [keyword]);
  return (
    <div>
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={"Continue"}/> */}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
