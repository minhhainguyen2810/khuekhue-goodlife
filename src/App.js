import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
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
        <Route path="/bathroom">
          <AboutUs />
        </Route>
        <Route path="/kitchen">
          <AboutUs />
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
