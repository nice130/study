import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Study from "./reactStudy/Study";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/">
        <Study />
      </Route>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  </Router>
  );
}
export default App;