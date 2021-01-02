import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
        <Route path="/bathroom">
          <AboutUs />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/travel">
          <AboutUs />
        </Route>
        <Route path="/blog">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
