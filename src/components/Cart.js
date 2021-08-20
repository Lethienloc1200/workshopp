import React, { Component } from "react";
import "../css/Checkout.css";
import TongCong from "../TongCong";
// import CartItem from "./CartItem";

class Cart extends Component {
  
  render() {
    var { children } = this.props;
    return (
      <div className="checkout">
        <div className="container-fluid ">
         
              {/* <h2 className="btn btn-primary mx-3 my-3">
                <b>hé lô</b>
              </h2> */}<p className="mt-3 mb-3">...</p>
            <div className="GioHangCuaBan ml-5 ">
             
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