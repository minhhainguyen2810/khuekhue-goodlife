import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/sign-in", "/"]}>
          <SignIn />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
