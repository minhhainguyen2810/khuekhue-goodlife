import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="container product-detail-container ">
        <div className="d-flex mb-4">
          <img src="images/Ellipse 14.png" alt="avatar" />
          <div className="d-inline-block mt-3 ms-4">
            <div className="fs-18 fw-bold">KHUE HOANG</div>
            <div className="fs-18 fw-bold text-light">
              (hoangmkhue999@gmail.com)
            </div>
          </div>
        </div>
        <Link to="/sign-in">Sign Out</Link>
      </div>
    </>
  );
};

export default Account;
