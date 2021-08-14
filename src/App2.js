import React, { Component, useEffect } from "react";
import "./css/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import QuanLySP from "./components/ProductList";

import routes from "./routes";

class App2 extends Component {

  render(){
    return (
            <Router>
              <div className="app">
                <Switch>
                  {/* <Route path="/login">
                    <Login />
                  </Route>
        
                  <Route path="/checkout">
                    <Header />
                    <Checkout />
                    <Footer />
                  </Route>
        
                  <Route path="/payment">
                    <Header />
                    <Payment />
                    <Footer />
                  </Route>
                  <Route path="/QLSP">
                    <Header />
                    <QuanLySP />
                  </Route>
        
                  <Route path="/">
                    <Header />
                    <Home />
                    <Footer />
                  </Route> */}
                  

                  {this.showContentMenus(routes)}
        
        
                </Switch>
              </div>
            </Router>
          );
  }

 showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App2;
