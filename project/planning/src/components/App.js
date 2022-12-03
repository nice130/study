import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from "../routes/Home";
import NewPlan from "../routes/NewPlan";
import Planning from "../routes/Planning";
import SideBar from "./SideBar";
function App({savePlan,setSavePlan}) {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/plan">
          <NewPlan />
        </Route>
        <Route path="/planning">
          <Planning />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  )
}

export default App;
