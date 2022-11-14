import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import AddPlanpop from "./routes/AddPlan";
import Home from "./routes/Home";
import NewNote from "./routes/NewNote";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pop">
          <AddPlanpop />
        </Route>
        <Route path="/note">
          <NewNote />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
