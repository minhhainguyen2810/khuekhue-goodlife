import { Link } from "react-router-dom";

const Information = () => {
  return (
    <>
      <div className="container product-detail-container ">
        <div className="row">
          <div className="col-9 left-info">
            <p className="fs-14 text-grey-3">
              Cart / <span className="fw-bold">Information</span> / Payment
            </p>
            <p className="fs-18">Contact Information</p>
            <div className="d-flex">
              <img src="images/Ellipse 14.png" alt="avatar" />
              <div className="d-inline-block mt-3 ms-4">
                <div className="fs-18 fw-bold">KHUE HOANG</div>
                <div className="fs-18 fw-bold text-light">
                  (hoangmkhue999@gmail.com)
                </div>
              </div>
            </div>
            <div className="fs-18 my-5">Shipping Address</div>
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="firstName"
                      aria-describedby="emailHelp"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="lastName"
                      aria-describedby="emailHelp"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Phone"
                      aria-describedby="emailHelp"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mt-4">
                  <div className="form-group">
                    <select
                      className="form-select border-bot"
                      aria-label="Country"
                    >
                      <option value="Vietnam">Vietnam</option>
                      <option value="Laos">Laos</option>
                      <option value="Cambodia">Cambodia</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Postal">Postal Code</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Postal"
                      aria-describedby="emailHelp"
                      placeholder="Enter Postal Code"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="City">City</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="City"
                      aria-describedby="emailHelp"
                      placeholder="Enter City"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="Address">Address</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Address"
                      aria-describedby="emailHelp"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <p className="my-5 fs-18">Shipping Method</p>
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Material"
                    id="r13"
                    checked
                  />
                  <label className="form-check-label" htmlFor="r13">
                    DHL GoGreen (2-3 business days)
                  </label>
                </div>
                $10.00
              </div>

              <div className="d-flex justify-content-between my-5">
                <Link to="/cart">Return to cart</Link>

                <Link className="btn btn-primary btn-lg" to="/payment">
                  Payment
                </Link>
              </div>
            </form>
          </div>
          <div className="col-3">
            <div className="order-summary">
              <p>ORDER SUMMARY</p>
              <div className="mt-4 d-flex justify-content-between">
                <span>Subtotal</span>
                <span>$33.97</span>
              </div>
              <div className="my-4 d-flex justify-content-between">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <a className=" link-primary" role="button">
                Add coupon code
              </a>
            </div>
            <div className="total mb-4">
              <div className="fs-4 fw-bold d-flex justify-content-between">
                <span>Total</span>
                <span>$43.97</span>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img
                  src="images/travelkit/image 1-1.png"
                  alt="product"
                  className="w-100"
                />
              </div>
              <div className="col-4">
                <img
                  src="images/travelkit/image 1-2.png"
                  alt="product"
                  className="w-100"
                />
              </div>
              <div className="col-4">
                <img
                  src="images/travelkit/image 1-3.png"
                  alt="product"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
