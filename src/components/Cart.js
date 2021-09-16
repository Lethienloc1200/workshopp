import React, { Component } from "react";
import "../css/Checkout.css";
// import CartItem from "./CartItem";

class Cart extends Component {
  
  render() {
    var { children } = this.props;
    return (
      <div className="checkout">
        <div className="container-fluid cart-edit">
         
             <p className="mt-3 mb-3">...</p>
            <div className="GioHangCuaBan ">
             
              <h2 className="GioHang"> Giỏ hàng của bạn</h2>
              <div className="border border-primary border-1"></div>

              {children}
           
              <div className="border border-success border-1"></div>
            </div>
        
        
        </div>
      </div>
    );
  }
}

export default Cart;
