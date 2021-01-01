import { Link } from "react-router-dom";
import classNames from "classnames";

const Header = ({ className }) => {
  return (
    <nav className={classNames("site-header sticky-top ", className)}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
          <Link to="/home" className="">
            Bathroom
          </Link>
          <Link to="/home" className=" d-md-inline-block">
            Kitchen
          </Link>
          <Link to="/home" className=" d-md-inline-block">
            For travel
          </Link>
        </div>
        <Link to="/home" className=" d-md-inline-block">
          <img src="images/logo.png" alt="" />
        </Link>
        <div className="container d-flex flex-column flex-md-row justify-content-around align-items-center">
          <Link to="/home" className=" d-md-inline-block">
            About Us
          </Link>
          <Link to="/home" className=" d-md-inline-block">
            Blog
          </Link>
          <div>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-search me-3"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-person mx-3"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="currentColor"
              className="bi bi-cart3 ms-3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
