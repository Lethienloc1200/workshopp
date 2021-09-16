import React from "react";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
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
        {/* <Payment /> */}
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
    path: "/Register",
    exact: true,
    main: () => (
      <div>
       <Register/>
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
