import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Bathroom from "./pages/Bathroom";
import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";
import Home from "./pages/Home";
import Kitchen from "./pages/Kitchen";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Travel from "./pages/Travel";

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
          <Bathroom />
        </Route>
        <Route path="/kitchen">
          <Kitchen />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/blog">
          <Blogs />
        </Route>
        <Route path="/blog1">
          <Blog1 />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
