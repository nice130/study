import Button from "./Button";
import styles from "./App.module.css";
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev +1);
  console.log("i run all the time");
  const iRunOnlyOnce = ()=>{
    console.log("i run only once.");
  };
  useEffact(iRunOnlyOnce,[]);
  return (
    <div>
      <h1>{counter}</h1>
      <butotn onClick ={onClick}>click</butotn>
    </div>
  );    
}

export default App;