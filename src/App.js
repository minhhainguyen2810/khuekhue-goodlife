import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
