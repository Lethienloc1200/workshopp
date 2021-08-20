import React from "react";
import "./css/Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {

    alert('Đã thêm  vào giỏ hàng');
// if (result = prompt('Em thích anh đúng không ?')) {
//    alert(' a biết mà ');
// } else {
//     alert('Anh cúng đéo nhé');
// }
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product efect-image">
      <div className="product__info">
        <p>{title}</p>
        <div className="row">

          <div className="col-sm-5">
              <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
          </div>
          <div className="col-sm-1">
          </div>

          <div className="col-sm-6">
              <div className="product__rating">
                {Array(rating)
                  .fill()
                  .map((ff, ui) => (
                    <p>🌟</p>
                  ))}
              </div>
          </div>

        </div>
      </div>
      <Link to="/products-detail">
      <img src={image} alt="" className="form__image scale-edit" />
      </Link>
      <Link to="/products-detail">
           <a>Xem chi tiết</a>
     </Link>
      <button className="hover__button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
