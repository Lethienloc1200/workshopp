import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";


function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //nếu nó thành coong tạo ra người dùng với email và pass
        history.push("/");
      })
      .catch((error) => alert(error.message));
  }

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          //nếu nó thành coong tạo ra người dùng với email và pass
          alert('đăng kí thành công')
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Đăng nhập</h1>

        <form>
          <h5 className="email_matkhau">E-mail</h5>
          <input className="input__email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="email_matkhau">Mật khẩu</h5>
          <input className="input__email"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Đăng nhập
          </button>
        </form>

        <p>
  
        </p>
        <Link to ="/register">  
        <h5 className="login__registerButton">
          Tạo một tài khoản
        </h5>
        </Link>
      </div>
    </div>
  );
}

export default Login;
