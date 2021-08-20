import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./Header";
// import Home from "./Home";
import Footer from "./Footer";
import Payment from "./Payment";
// import Checkout from "./Checkout";
import Login from "./Login";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import ProductDetail from "./ProductDetail";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import MessageContainer from './containers/MessageContainer';
import CartContainer from "./containers/CartContainer";


const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <div>
        <Header />
      <HomePage/>
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
        <MessageContainer />
        <CartContainer />
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

  {
    path: "/product/:id/detail",
    exact: false,
    main: ({match}) => (
      <div>
      <Header />
   <ProductDetailPage match ={match}/>
      <Footer />
    </div>
   
    )
  },

  //không tìm thấy
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];
export default routes;
