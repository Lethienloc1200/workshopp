





import React, { useEffect } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


import routes from "./routes";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);



  return (
      <div></div>
  );
}



export default App;

// ==============================
// import React, { useEffect } from "react";
// import "./css/App.css";
// import Header from "./Header";
// import Home from "./Home";
// import Checkout from "./Checkout";
// import Login from "./Login";
// import Footer from "./Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { auth } from "./firebase";
// import { useStateValue } from "./StateProvider";
// import Payment from "./Payment";
// import QuanLySP from "./components/QuanLySP";

// import routes from "./routes";

// function App() {

//   const [{}, dispatch] = useStateValue();

//   useEffect(() => {
//     // will only run once when the app component loads...

//     auth.onAuthStateChanged((authUser) => {
//       console.log("THE USER IS >>> ", authUser);

//       if (authUser) {
//         // the user just logged in / the user was logged in

//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         // the user is logged out
//         dispatch({
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);



//   return (
//     <Router>
//       <div className="app">
//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>

//           <Route path="/checkout">
//             <Header />
//             <Checkout />
//             <Footer />
//           </Route>

//           <Route path="/payment">
//             <Header />
//             <Payment />
//             <Footer />
//           </Route>
//           <Route path="/QLSP">
//             <Header />
//             <QuanLySP />
//           </Route>

//           <Route path="/">
//             <Header />
//             <Home />
//             <Footer />
//           </Route>
//           <Route path='' >
//           <h1>không thấy trang</h1>
//           </Route>


//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // var showContentMenus = (routes) => {
// //   var result = null;
// //   if (routes.lenth > 0) {
// //     result = routes.map((route, index) => {
// //       return (
// //         <Route
// //           key={index}
// //           path={route.path}
// //           exact={route.exact}
// //           component={route.main}
// //         />
// //       );
// //     });
// //   }
// //   return <Switch>{result}</Switch>;