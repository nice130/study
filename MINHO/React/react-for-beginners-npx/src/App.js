// import Button from "./Button";
// import styles from "./App.module.css";
import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currnet) => [...currnet, toDo]);
    setToDo("");
  };
  const deleteBtn = (targetIdx) => {
    setToDos(toDos.filter((_, idx) => idx !== targetIdx));
  };
  return (
    <div>
      <h1>My ToDoList{toDos.length === 0 ? null : "(" + toDos.length + ")"}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>
            {item}
            <button onClick={() => deleteBtn(idx)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
