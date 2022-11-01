import {useState, useEffect} from "react";

function Hello(){
  useEffect(() =>{
    console.log('create :)');
  },[]);
  return <h1>Hello</h1>
}

function App() {
 const [showing, setShowing] = useState(false);
 const onClick = () => setShowing((prev)=> !prev);
 return <div>
  {showing ? <Hello /> : null}
  <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
 </div>
}
//6분부터 고고
export default App;