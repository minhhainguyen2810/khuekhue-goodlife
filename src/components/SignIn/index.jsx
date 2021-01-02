import { Link } from "react-router-dom";
import Divider from "../Divider";

const SignIn = () => {
  return (
    <div className="wrapper">
      <main className="col form-signin">
        <form>
          <h1 className="title">SIGN IN</h1>
          <p>
            New user?&nbsp;
            <Link to="/sign-up" className="link-primary text-decoration-none">
              Create an account
            </Link>
          </p>
          <div className="social-btn row gx-1">
            <div className="col-6">
              <button
                type="button"
                className="facebook btn  w-100 text-start text-white"
              >
                <svg
                  width="13"
                  height="27"
                  viewBox="0 0 13 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.028 13.7829H8.45925V26.8572H3.05228V13.7829H0.480713V9.18809H3.05228V6.21472C3.05228 4.08844 4.0623 0.758911 8.50738 0.758911L12.5125 0.775667V5.23572H9.60653C9.12986 5.23572 8.45961 5.47387 8.45961 6.48817V9.19236H12.5004L12.028 13.7829Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-5">Facebook</span>
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="google btn w-100 text-start text-white"
              >
                <svg
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.963072 8.89494C0.801569 4.64274 4.52612 0.713188 8.7826 0.662206C10.952 0.477173 13.0626 1.31963 14.7044 2.69365C14.0309 3.43414 13.3457 4.16607 12.6138 4.8513C11.1684 3.9732 9.42826 3.30401 7.73907 3.89833C5.01455 4.67411 3.36458 7.89099 4.37282 10.5563C5.20779 13.34 8.59365 14.8677 11.2472 13.6983C12.6212 13.2063 13.5272 11.9385 13.9247 10.5763C12.3499 10.5449 10.7748 10.5645 9.20008 10.521C9.19616 9.58409 9.19224 8.65073 9.19616 7.71379C11.8223 7.70987 14.4523 7.70203 17.0824 7.72556C17.2439 10.0212 16.9052 12.478 15.4128 14.3204C13.3692 16.9505 9.59368 17.7223 6.52227 16.6906C3.26262 15.62 0.892125 12.3361 0.963072 8.89494Z"
                    fill="white"
                  />
                  <path
                    d="M22.2013 5.35107C22.981 5.35107 23.7604 5.35107 24.5437 5.35107C24.5479 6.1347 24.5554 6.92225 24.5597 7.70552C25.343 7.71337 26.1305 7.71729 26.9141 7.72121C26.9141 8.50484 26.9141 9.28419 26.9141 10.0678C26.1309 10.0717 25.3433 10.0757 24.5597 10.0796C24.5519 10.8671 24.5479 11.6504 24.5437 12.438C23.7604 12.434 22.9764 12.438 22.197 12.438C22.1896 11.6504 22.1896 10.8671 22.1814 10.0835C21.3981 10.0753 20.6105 10.0717 19.8269 10.0675C19.8269 9.28383 19.8269 8.50448 19.8269 7.72085C20.6105 7.71693 21.3942 7.71301 22.1814 7.70517C22.1853 6.92225 22.1931 6.1347 22.2013 5.35107Z"
                    fill="white"
                  />
                </svg>

                <span className="ms-5">Google</span>
              </button>
            </div>
          </div>
          <Divider />
          <label htmlFor="inputEmail">User name</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control border-bot"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control border-bot"
            required=""
          />
          <div className="checkbox mb-3 d-flex justify-content-between">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
            <Link to="/sign-up" className="link-secondary">
              <span>Forgot your password?</span>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/home">
              <button className="btn btn-lg btn-primary" type="submit">
                SIGN IN
              </button>
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
