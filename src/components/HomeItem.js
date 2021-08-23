import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/HomeItem.css"
import * as Message from './../constants/Message';


class HomeItem extends Component {

 

    render() {
        var { product } = this.props;

     
        return (
            <div className="width__product">
            {/* // =========Home item========= */}
            <div className="product efect-image">
            <div className="product__info">
              <p>{product.name}</p>
              <div className="row">
      
                <div className="col-sm-6">
                  
                    <p className="product__price">
                      
                     {product.price}  vnd 
                     
                    </p>
                </div>
              
                <div className="col-sm-6">
                    <div className="product__rating">
                        <p>🌟🌟🌟🌟</p> 
                    </div>
                </div>
      
              </div>
            </div>
            <Link to={`/product/${product.id}/detail`}>
            <img src={`${product.image}`} alt="" className="form__image scale-edit" />
            </Link>
            <Link to={`/product/${product.id}/detail`}>
                 <a className="xemchitiet">Xem chi tiết</a>
           </Link>
            <button onClick={()=>this.onAddToCart(product)} className="hover__button" >
              Thêm vào giỏ
            </button>
          </div>

          </div>





        );
       
    }
    onAddToCart=(product)=>{
       this.props.onAddToCart(product);
       this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
     }
}

export default HomeItem;