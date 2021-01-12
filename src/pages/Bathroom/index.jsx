import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import classNames from "classnames";
import DropdownList from "../../components/DropdownList";
import kitchenProducts from "../../list-products/kitchen.json";

const Bathroom = () => {
  const [filter, setFilter] = useState(0);

  return (
    <>
      <div className="header header__bathroom">
        <Header logoDark />
      </div>
      <div className="container kitchen-container">
        <div className="row gx-5">
          <div className="col-xs-12 col-md-3 filter-section">
            <h4 className="text-primary fw-bold">Bathroom</h4>
            <ul className="list-group">
              <li>
                <a
                  role="button"
                  className={classNames("link-secondary", {
                    active: filter === 0,
                  })}
                  onClick={() => setFilter(0)}
                >
                  All (37)
                </a>
              </li>
              <li>
                <a
                  role="button"
                  className={classNames("link-secondary", {
                    active: filter === 1,
                  })}
                  onClick={() => setFilter(1)}
                >
                  Reduce Products (30)
                </a>
              </li>
              <li>
                <a
                  role="button"
                  className={classNames("link-secondary", {
                    active: filter === 2,
                  })}
                  onClick={() => setFilter(2)}
                >
                  Refill Products (7)
                </a>
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
                50$ - 70$
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
                70$ - 100$
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
          <div className="col-xs-12 col-md-9 products-section">
            <div className="mb-4 text-light">
              <DropdownList />
            </div>
            <ListProducts products={kitchenProducts} col4 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bathroom;
