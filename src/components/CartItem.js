import React, { Component } from 'react';
import * as Message from './../constants/Message';
// import './css/CheckoutProduct.css';


class CartItem extends Component{
 render(){
    var { item } = this.props;
    var { quantity } = item; 
    console.log(item);
    return (
        <div>

       
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={item.product.image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>Tên SP : {item.product.name}</p>
                
                <div className="checkoutProduct__title">
                    <p>Số lượng:    </p>
                    <div className="btn-group radio-group" data-toggle="buttons">
                       
                    <b className="mr-5"> {quantity}</b> <label
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a> 
                        </label> 
                    </div>
                   
                </div> 
                <p className='checkoutProduct__title'>Giá: {item.product.price} vnd</p>
                <td className="tongtien"> Tổng tiền : {this.showSubTotal(item.product.price, item.quantity)}$</td>
                
                
                    <button className="xoa_gio_hang" onClick={() => this.onDelete(item.product)}>Xóa khỏi giỏ hàng</button>
                
            </div>
            <hr/>
          
        </div>
                <div className="border border-primary border-1"></div>
        </div>
    )
}
        //======== update sản phẩm
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    //===Xóa khỏi giỏ hàng

    onDelete = (product) => {
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    //=====Tính tổng tiền

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

}

export default CartItem