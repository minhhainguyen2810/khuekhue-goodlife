import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import kitchenProducts from "../../list-products/kitchen.json";

const Search = () => {
  return (
    <>
      <div className="header header__search">
        <Header logoDark withDivider />
      </div>
      <div className="container kitchen-container">
        <h4 className="text-center mb-3">FIND 35 RESULTS FOR “brush”</h4>
        <div className="d-flex justify-content-center mb-5">
          <div className="form-check d-inline-block me-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Product
            </label>
          </div>
          <div className="form-check d-inline-block">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck2"
            />
            <label className="form-check-label" htmlFor="exampleCheck2">
              Blog
            </label>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-xs-12 products-section">
            <ListProducts products={kitchenProducts} col3 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
