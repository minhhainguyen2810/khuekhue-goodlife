import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Payment = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleClose = () => {
    setShow(false);
    history.push("/cart");
  };

  const handleConfirm = () => {
    setShow(true);
  };
  return (
    <>
      <div className="container product-detail-container ">
        <p className="fs-14 text-grey-3">
          Cart / Information / <span className="fw-bold">Payment</span>
        </p>
        <div className="row">
          <div className="col-9 left-info">
            <div className="payment-info mb-3">
              <p className="fs-18">GUEST CHECKOUT</p>
              <p className="fs-18">Khue Hoang (hoangmkhue999@gmail.com)</p>
            </div>
            <div className="payment-info mb-5">
              <p className="fs-18">SHIPPING INFORMATION</p>
              <p className="fs-18">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.40582 6.23934C4.40582 8.12329 5.2408 9.81223 6.56088 10.9563C5.33786 11.2674 4.22408 11.7205 3.27486 12.29C1.39071 13.4205 0 15.1216 0 17.1896C0 17.1896 0 17.1895 0 17.1896V20.3189C0 20.7985 0.255518 21.1955 0.448206 21.4172C0.561494 21.5476 0.705641 21.6796 0.878973 21.7854C1.04488 21.8866 1.29783 22 1.60967 22H19.6806C20.4147 22 20.768 21.4395 20.8881 21.1612C21.0171 20.8625 21.0522 20.5465 21.0522 20.3189V17.1896C21.0522 17.1896 21.0522 17.1896 21.0522 17.1896C21.0522 15.1216 19.6614 13.4205 17.7773 12.29C16.8755 11.7489 15.8252 11.313 14.6738 11.004C16.026 9.85945 16.8845 8.14965 16.8845 6.23934C16.8845 2.79345 14.0911 0 10.6452 0C7.19927 0 4.40582 2.79345 4.40582 6.23934ZM10.6452 2C8.30383 2 6.40582 3.89802 6.40582 6.23934C6.40582 8.5139 8.19712 10.3701 10.446 10.4741L10.5261 10.4739C10.6165 10.4739 10.7066 10.4746 10.7966 10.476C13.0678 10.3963 14.8845 8.52998 14.8845 6.23934C14.8845 3.89802 12.9865 2 10.6452 2ZM19.0522 17.1896C19.0522 16.0996 18.3114 14.9429 16.7483 14.005C15.264 13.1144 13.1751 12.5207 10.81 12.4766C10.7552 12.478 10.7003 12.4787 10.6452 12.4787C10.5665 12.4787 10.4881 12.4772 10.4102 12.4743C7.97606 12.4929 5.82317 13.0934 4.30385 14.005C2.74075 14.9429 2 16.0996 2 17.1896C2 17.1895 2 17.1896 2 17.1896V20H19.0522V17.1896C19.0522 17.1896 19.0522 17.1895 19.0522 17.1896Z"
                    fill="#3E3E3E"
                  />
                </svg>
                <span className="ms-3">Khue Hoang</span>
              </p>
              <p className="fs-18">
                <svg
                  width="23"
                  height="30"
                  viewBox="0 0 23 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0.875C5.63198 0.875 0.875 5.63198 0.875 11.5C0.875 12.94 1.49308 14.758 2.41227 16.6709C3.33334 18.5877 4.56453 20.6152 5.80682 22.4792C8.29159 26.2074 10.8277 29.2914 11.0357 29.5428C11.1501 29.6812 11.3204 29.7614 11.5 29.7614C11.6796 29.7614 11.8499 29.6812 11.9643 29.5428C12.1723 29.2914 14.7084 26.2074 17.1932 22.4792C18.4355 20.6152 19.6667 18.5877 20.5877 16.6709C21.5069 14.758 22.125 12.94 22.125 11.5C22.125 5.63198 17.368 0.875 11.5 0.875ZM16.8411 20.8083C14.7568 24.0441 12.4627 26.9934 11.5 28.2005C10.5372 26.9937 8.24322 24.0445 6.15886 20.8089C5.07956 19.1334 4.05811 17.3836 3.3069 15.7607C2.55403 14.1342 2.07956 12.6496 2.07955 11.5C2.08555 6.29973 6.29975 2.08557 11.5 2.07955C16.7003 2.08557 20.9145 6.29978 20.9205 11.5001C20.9204 12.6495 20.446 14.1339 19.6931 15.7602C18.9419 17.383 17.9204 19.1328 16.8411 20.8083Z"
                    fill="#3E3E3E"
                    stroke="#3E3E3E"
                    strokeWidth="0.25"
                  />
                  <path
                    d="M18.0719 9.59139L18.0718 9.59132L11.8673 4.8186C11.6507 4.65194 11.3491 4.65194 11.1326 4.8186L4.92805 9.59132L4.92795 9.59139C4.66452 9.79444 4.61559 10.1727 4.81863 10.4361L4.81864 10.4361C4.9326 10.5839 5.10862 10.6706 5.29535 10.6707H5.2954H6.60221V15.7957C6.60221 16.1283 6.87188 16.3979 7.20449 16.3979H15.7954C16.128 16.3979 16.3977 16.1283 16.3977 15.7957V10.6707H17.7045H17.7045C18.0372 10.6705 18.3067 10.4007 18.3065 10.0681C18.3064 9.88138 18.2198 9.70536 18.0719 9.59139ZM10.6704 15.1934V12.5798H12.3295V15.1934H10.6704ZM15.7954 9.46612C15.4628 9.46612 15.1931 9.73579 15.1931 10.0684V15.1934H13.534V11.9775C13.534 11.6449 13.2644 11.3752 12.9318 11.3752H10.0681C9.73551 11.3752 9.46585 11.6449 9.46585 11.9775V15.1934H7.80676V10.0684C7.80676 9.73579 7.5371 9.46612 7.20449 9.46612H7.06611L11.4999 6.05569L15.9338 9.46612H15.7954Z"
                    fill="#3E3E3E"
                    stroke="#3E3E3E"
                    strokeWidth="0.25"
                  />
                </svg>

                <span className="ms-3">
                  2265 Sundown Lane, Austin, Texas, USA
                </span>
              </p>
              <p className="fs-18">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7171 21.1382H21.7172V17.2221C21.7172 16.9717 21.5128 16.7682 21.2633 16.7682C19.7704 16.7682 18.3051 16.5345 16.9074 16.0729L16.9073 16.0729C16.7458 16.0194 16.5668 16.0611 16.4449 16.1811L16.4392 16.1868L16.4327 16.1916L13.582 18.3523C13.3668 18.5154 13.0754 18.5412 12.8365 18.4169C9.41634 16.6648 7.31194 14.5593 5.58287 11.163L21.7171 21.1382ZM21.7171 21.1382V21.2632M21.7171 21.1382V21.2632M21.7171 21.2632C21.7171 21.5135 21.5127 21.7171 21.2632 21.7171C10.7976 21.7171 2.28288 13.2024 2.28288 2.73684C2.28288 2.48646 2.48728 2.28288 2.73684 2.28288H6.7895C7.03906 2.28288 7.24346 2.48646 7.24346 2.73684C7.24346 4.22819 7.47699 5.69305 7.93486 7.0823C7.98547 7.24674 7.95112 7.42402 7.76475 7.6175L7.75955 7.6229M21.7171 21.2632L7.75955 7.6229M7.75955 7.6229L7.75503 7.62888M7.75955 7.6229L7.75503 7.62888M7.75503 7.62888L5.64764 10.4194L5.64746 10.4196M7.75503 7.62888L5.64746 10.4196M5.64746 10.4196C5.48581 10.6347 5.46025 10.9232 5.58275 11.1628L5.64746 10.4196ZM9.27672 6.65146L9.27673 6.65146L9.27612 6.64959C8.8623 5.39562 8.65134 4.07843 8.65134 2.73684C8.65134 1.71021 7.81613 0.875 6.7895 0.875H2.73684C1.71021 0.875 0.875 1.71021 0.875 2.73684C0.875 13.9784 10.0216 23.125 21.2632 23.125C22.2898 23.125 23.125 22.2898 23.125 21.2632V17.2221C23.125 16.1955 22.2898 15.3603 21.2632 15.3603C19.9194 15.3603 18.6037 15.1505 17.3559 14.7381C16.702 14.5131 15.9581 14.6821 15.5163 15.1258L13.0897 16.9584C10.3106 15.4618 8.51886 13.6711 7.04035 10.9104L8.82255 8.54234C9.31287 8.04624 9.48757 7.32593 9.27672 6.65146Z"
                    fill="#3E3E3E"
                    stroke="#3E3E3E"
                    strokeWidth="0.25"
                  />
                </svg>

                <span className="ms-3">(+)544 523 220</span>
              </p>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r13"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="r13">
                Payment on delivery
              </label>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="Material"
                id="r14"
              />
              <label className="form-check-label" htmlFor="r14">
                Credit card
              </label>
            </div>
            <form>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="Card">Card number</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Card"
                      aria-describedby="emailHelp"
                      placeholder="Card number"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="Name">Name on card</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Name"
                      aria-describedby="emailHelp"
                      placeholder="Name on card"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Expiration">Expiration date</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Expiration"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="Security">Security code</label>
                    <input
                      type="text"
                      className="form-control border-bot"
                      id="Security"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between my-5">
                <Link to="/information">Return to Information</Link>

                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="text-center">
          <img className="mt-5" src="images/verified 1.png" alt="verified" />
          <p className="fs-4 mb-4 mt-5">THANKS FOR YOUR ORDER!</p>
          <p>Your payment is complete. Check your email receipt.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Back to your cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Payment;
