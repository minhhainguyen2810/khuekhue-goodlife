import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Counter from "../../components/Counter";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import cartProducts from "../../list-products/cart.json";

const Cart = () => {
  return (
    <>
      <div className="header header__search">
        <Header logoDark />
      </div>
      <div className="container cart-container">
        <h1 className="text-center your-cart">YOUR CART</h1>
        <Table responsive className="align-middle">
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={item.imgSrc} alt="product" width={120} />
                    <span className="ms-3">{item.title}</span>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <Counter className="mx-3" />
                </td>
                <td>{item.price}</td>
                <td>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="button"
                  >
                    <path
                      d="M6.43407 6.4682C6.79465 6.10558 7.38091 6.10393 7.74353 6.4645L12.5031 11.1972L17.2626 6.4645C17.6252 6.10393 18.2115 6.10558 18.572 6.4682C18.9326 6.83081 18.9309 7.41707 18.5683 7.77765L13.8162 12.503L18.5683 17.2284C18.9309 17.589 18.9326 18.1752 18.572 18.5378C18.2115 18.9005 17.6252 18.9021 17.2626 18.5415L12.5031 13.8088L7.74353 18.5415C7.38091 18.9021 6.79465 18.9005 6.43407 18.5378C6.0735 18.1752 6.07515 17.589 6.43777 17.2284L11.1899 12.503L6.43777 7.77765C6.07515 7.41707 6.0735 6.83081 6.43407 6.4682Z"
                      fill="#999999"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25C5.59644 25 0 19.4036 0 12.5ZM12.5 1.85185C6.61919 1.85185 1.85185 6.61919 1.85185 12.5C1.85185 18.3808 6.61919 23.1481 12.5 23.1481C18.3808 23.1481 23.1481 18.3808 23.1481 12.5C23.1481 6.61919 18.3808 1.85185 12.5 1.85185Z"
                      fill="#999999"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="fs-18 fw-bold">
              <td></td>
              <td>
                <span>Total</span>
              </td>
              <td>
                <span style={{ marginLeft: "43px" }}>{3}</span>
              </td>
              <td>$80.00</td>
            </tr>
          </tfoot>
        </Table>
        <div className="d-flex justify-content-between mt-5">
          <Link to="/kitchen">Return to shopping</Link>

          <Link className="btn btn-primary btn-lg" to="/information">
            Check Out
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
