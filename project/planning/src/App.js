import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from "./routes/Home";
import NewNote from "./routes/NewNote";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/note/">
          <NewNote />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
