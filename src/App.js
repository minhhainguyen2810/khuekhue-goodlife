import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Account from "./pages/Account";
import Bathroom from "./pages/Bathroom";
import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Information from "./pages/Information";
import Kitchen from "./pages/Kitchen";
import Payment from "./pages/Payment";
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
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/information">
          <Information />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
