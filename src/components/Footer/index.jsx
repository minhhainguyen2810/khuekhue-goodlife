import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md">
            <h5>Our Missions</h5>
            <q>
              Our mission is to provide high quality products that are not
              tested on animals and are completely safe for the environment.
            </q>
          </div>
          <div className="col-6 col-md">
            <h5>About Us</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/home" className="">
                  Cool stuff
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Random feature
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Team feature
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Product</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/home" className="">
                  Resource
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Resource name
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Another resource
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Support</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/home" className="">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Government
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <Link to="/home" className="">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/home" className="">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container d-flex justify-content-end">
        Copyright 2020@ GOODLIFE STORE
      </div>
    </footer>
  );
};

export default Footer;
