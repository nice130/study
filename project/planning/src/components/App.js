import { useState } from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from "../routes/Home";
import NewPlan from "../routes/NewPlan";
import Planning from "../routes/Planning";
import SideBar from "./SideBar";
function App({savePlan,setSavePlan}) {
  const [toggled,setToggled]=useState(false);
  return (
    <Router>
      <SideBar toggled={toggled} setToggled={setToggled}/>
      <Switch>
        <Route path="/plan">
          <NewPlan />
        </Route>
        <Route path="/planning">
          <Planning toggled={toggled} setToggled={setToggled}/>
        </Route>
        <Route path="/">
          <Home toggled={toggled} setToggled={setToggled}/>
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  )
}

export default App;
