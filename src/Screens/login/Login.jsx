import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/Frame.png";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        history.push(`/`);
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 2000);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-box__logo">
          <img src={logo} alt="logo" />
        </div>
        {/**Error */}
        {error && (
          <div className="error">
            <div className="information">
              <span className="material-icons"> info </span>
              <p>invalid email/password</p>
            </div>
            <span
              className="material-icons close"
              onClick={() => setError(false)}
            >
              {" "}
              close{" "}
            </span>
          </div>
        )}
        {/**Error */}
        <div className="login-box__heading">
          <p>Join thousands of learners from</p>
          <p>around the world </p>
        </div>
        <div className="login-box__body">
          <p className="mobile-text">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
          <div className="desktop-text">
            <p>Master web development by making real-life</p>
            <p>projects. There are multiple paths for you to </p>
            <p>choose</p>
          </div>
        </div>
        <form className="login-box__form" onSubmit={handleSubmit}>
          <div className="login-box__form-control">
            <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-box__form-control">
            <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-box__form-button" type="submit">
            {loading ? <div className="loader"></div> : <p>Login</p>}
          </button>
        </form>
        <div className="login-box__socials">
          <p>or continue with these social profile</p>
          <div className="login-box__social-icons">
            <div className="icon">
              <i className="fa fa-google fa-lg" aria-hidden="true"></i>
            </div>
            <div className="icon">
              <i
                className="fa fa-facebook-official fa-lg"
                aria-hidden="true"
              ></i>
            </div>
            <div className="icon">
              <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
            </div>
            <div className="icon">
              <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="login-box__link">
          <p>
            Don&apos;t have an account? <a href="#">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
