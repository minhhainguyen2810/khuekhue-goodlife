import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="row wrapper">
      <main className="col offset-6 form-signin ">
        <form>
          <h1 className="title">SIGN IN</h1>
          <p>
            New user?&nbsp;
            <Link to="/sign-up" className="link-primary text-decoration-none">
              Creat an account
            </Link>
          </p>
          <label htmlFor="inputEmail" className="visually-hidden">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
          />
          <label htmlFor="inputPassword" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
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
