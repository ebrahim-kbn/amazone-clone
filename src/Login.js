import React, { useState } from "react";
import "./Login.css";

import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />
          <button
            type="submit"
            onClick={login}
            className="login__signInButton"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          color="primary"
          variant="contained"
          className="login__registerButton"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
