import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";


function Register() {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const register = (e) => {
    e.preventDefault();
 
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((result) =>
      result.user
        .updateProfile({
          displayName: firstName,
        })
        .then(() => {
          history.push("/");
          alert('đăng kí thành công')
        })
    )
    .catch((error) => alert(error.message));
};

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
        />
      </Link>

      <div className="login__container">
        <h1>Đăng Kí</h1>

        <form>
        <h5 className="email_matkhau">Tên </h5>
          <input className="input__email"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

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
            onClick={register}
            className="login__signInButton"
          >
            Đăng kí
          </button>
        </form>

        <p>
  
        </p>
        <Link to="/login">
        <h5 className="login__registerButton" >
         Bạn đã có tài khoản
        </h5>
        </Link>
      </div>
    </div>
  );
}

export default Register;
