import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";

const Kitchen = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <div className="header header__kitchen">
        <Header />
      </div>
      <div className="container kitchen-container">
        <div className="row">
          <div className="col-3 filter-section">
            <h4 className="text-primary fw-bold">KITCHEN</h4>
            <ul className="list-group">
              <li className="">
                <NavLink exact to={`${url}`}>
                  All (37)
                </NavLink>
              </li>
              <li className="">
                <NavLink to={`${url}/reduce-product`}>
                  Reduce Products (30)
                </NavLink>
              </li>
              <li className="">
                <NavLink to={`${url}/refill-product`}>
                  Refill Products (7)
                </NavLink>
              </li>
            </ul>

            <h4 className="text-primary fw-bold filter-by-title">FILTER BY</h4>
            <p className="mt-4 text-dark fw-bold fs-18">Price</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r1"
              />
              <label className="form-check-label" htmlFor="r1">
                0 - $10
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r2"
              />
              <label className="form-check-label" htmlFor="r2">
                10$ - 30$
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r3"
              />
              <label className="form-check-label" htmlFor="r3">
                30$ - 50$
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r4"
              />
              <label className="form-check-label" htmlFor="r4">
                50$-70$
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r5"
              />
              <label className="form-check-label" htmlFor="r5">
                70$-100$
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="r6"
              />
              <label className="form-check-label" htmlFor="r6">
                &gt; 100$
              </label>
            </div>
            <p className="mt-4 text-dark fw-bold fs-18">Material</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r11"
              />
              <label className="form-check-label" htmlFor="r11">
                Bamboo
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r12"
              />
              <label className="form-check-label" htmlFor="r12">
                Wood
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r13"
              />
              <label className="form-check-label" htmlFor="r13">
                Cotton
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r14"
              />
              <label className="form-check-label" htmlFor="r14">
                Stainless steel
              </label>
            </div>
          </div>
          <div className="col-9 products-section">
            <Switch>
              <Route exact path={path}>
                <ListProducts />
              </Route>
              <Route path={`${path}/:topicId`}>
                <ListProducts />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kitchen;
