import React, { Component } from "react";

class CartResult extends Component {
  render() {
    var { cart } = this.props;
    return (
      <div className="col-sm-7 mt-3 thanh_toan_box">
        <div className="mb-5">
          <strong className="mr-3">Địa chỉ giao hàng</strong>
          <p className="mr-3" > 526 An Dương Vương-Trường DH Quy Nhơn</p>
        </div>
        <div>
          <strong className="mr-3">Tổng tiền: </strong>

          <strong className="mr-3" >{this.showTotalAmount(cart)}$</strong>
        </div>

        <button type="button" className="bt__thanh_toan mt-3 hover__button ">
          Thanh toán
        </button>
      </div>
    );
  }

  showTotalAmount = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
}

export default CartResult;
