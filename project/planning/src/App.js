import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from "./routes/Home";
import Planning from "./routes/Planning"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/planning">
          <Planning />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
