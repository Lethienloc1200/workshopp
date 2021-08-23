// rfce//
import React from "react";
import "./css/Header.css";
import { Route, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const hanleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  // ============
  const menus = [
    {
      name: "Trang chu",
      to: "/",
      exact: true,
    },
    {
      name: "Product Management",
      to: "/product-list",
      exact: false,
    },
  ];

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top menutren heade__box">
        <div class="container-fluid toogle-box ">
          <Link to="/">
            <img
            // class="navbar-toggler"
            data-target="#my-nav"
            data-toggle="collapse"
            aria-label="Toggle navigation"
              className="header__logo"
              src="https://e7.pngegg.com/pngimages/996/491/png-clipart-shopify-e-commerce-logo-web-design-design-web-design-logo.png"
              alt="logo"
            />
          </Link>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>
    
      
          <div id="my-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav float-sm-right menuphai">
              <li class="nav-item">
                <Link to="/QLSP">
                  <div className="quan__ly">
                    <h4 className="quan__ly__text">Quản lý </h4>
                  </div>
                </Link>
              </li>
              
              <li class="nav-item gio__hang">
                <Link to="/checkout">
                  <AddShoppingCartIcon />
                   <span className="gio__hang_text ml-1 ">Giỏ hàng</span>
                </Link>
              </li>

              <li class="nav-item">
              <Link to="/checkout">
                 
                  </Link>
              </li>
              <li class="nav-item">
                <Link to={!user && "/login"}>
                  <div onClick={hanleAuthenticaton} className="header__option ">
                   <i> <span className=" gio__hang_text">
                      Hello {!user ? "Guest" : user.email}
                    </span></i>
                    <h4 className=" quan__ly__text">
                      {user ? "Đăng xuất" : "Đăng nhập"}
                    </h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
     
      <div className=" border border-primary"></div>
      {/* ===============nav============ */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Danh mục
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Điện thoại
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      i phone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Appo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thời trang nam
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Áo nam
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quần nam
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Balo thời trang
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Giày
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thời trang nữ
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Váy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Áo khoác
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Quần rin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ti vi
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      LG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Toshiba
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Laptop
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Dell
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Asur
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mackbook
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Máy ảnh
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Máy ảnh 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Máy ảnh 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Máy ảnh 1
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Đồng hồ
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      i phone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Appo
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Điện thoại & phụ kiện
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      i phone
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Samsum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Appo
                    </a>
                  </li>
                </ul>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
      {/* ================== */}


      <div className="border border-warning"></div>
    </div>
  );
}

export default Header;
