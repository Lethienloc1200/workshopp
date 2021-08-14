import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Payment from "./Payment";
import Checkout from "./Checkout";
import Login from "./Login";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";



const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },

  {
    path: "/QLSP",
    exact: true,
    main: () => (
      <div>
        <Header />
        <ProductListPage/>
      </div>
    ),
  },
  {
    path: "/Payment",
    exact: true,
    main: () => (
      <div>
        <Header />
        <Payment />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Checkout",
    exact: true,
    main: () => (
      <div>
        <Header />
        <Checkout />
        <Footer />
      </div>
    ),
  },
  {
    path: "/Login",
    exact: true,
    main: () => (
      <div>
       <Login/>
      </div>
    ),
  },
  {
    path: "/product/add",
    exact: true,
    main: ({history}) => (
     <ProductActionPage history ={history}/>
    ),
  },
  {
    path: "/product/:id/edit",
    exact: true,
    main: ({match,history}) => (
     <ProductActionPage match={match} history ={history} />
    ),
  },

  //không tìm thấy
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
