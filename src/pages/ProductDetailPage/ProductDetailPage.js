import React, { Component } from "react";
import {
  actAddProductRequest,
  actGetProductRequest,actAddToCart, actChangeMessage
} from "./../../actions/index";
import { connect } from "react-redux";
import "../../css/ProductDetail.css";
import * as Message from '../../constants/Message';


class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDescription: "",
      txtImage: "",
      txtPrice: "",
      chkbStatus: "",
    
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;

      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtDescription: itemEditing.descript,
        txtImage: itemEditing.image,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
        
      }); 
    }
  }
 
  render() { 

    var { txtName, txtPrice, txtDescription, txtImage, chkbStatus } = this.state;
    var statusName = chkbStatus ? "Còn Hàng" : "Hết Hàng";
    var { itemEditing } = this.props;
  
        
   
    return (
      <div>
     
        {/* { product.image}
        { product.price}
        { product.descript}
        { product.name} */}
        <div className="container-fluid mt-5 mb-5">
          <div className="row mb-5">
            <h1 className="mx-auto">Chi tiết sản phẩm</h1>
          </div>
          <div className="row">
            {/* ===============col-5555555555555 */}
            <div className="col-md-4  magboo-3">
              <div className="card">
                <div className="demo">
                  <ul id="lightSlider">
                    <img src={txtImage} alt="" className=" width-image" />
                  </ul>
                </div>
              </div>
            </div>
         
  

            {/* //================col-77777777777777===================== */}
            <div className="col-md-8 ">
              <div className="card-right">
                <div className="row">
                  <div className="col-sm-5 about">
                    <span className="font-weight-bold-name nho  ">{txtName}</span>
     
                    <h4 className="font-weight-bold color-price mt-3 ml-2">{txtPrice} vnd</h4>
                  </div>
                  <div className="col-sm-1"></div>
                  <div className="col-sm-3">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>

                <div className="buttons ">
                  <button className="btn btn-info add__basket"
                       onClick={()=>this.onAddToCart(itemEditing)}>
                    Thêm vào giỏ hàng
                  </button>
                  <button className="btn btn-info add__basket ml-2 mr-5 ">
                    Mua ngay
                  </button>
                  <button className="btn btn-light wishlist ml-5">
                    <i className="fa fa-heart" />
                  </button>
                </div>
                <hr />
                {/* //======Mô tả sản phẩm */}
                <div className="product-description mt-3 mb-3">
                <span className="font-weight-bold nho">Trạng thái: </span>
                <span className="font-weight-bold nho">{statusName}</span>
                </div>
                <div className="product-description">
                  <div>
                    <span className="font-weight-bold nho">Color:</span>
                    <span className="font-weight-bold nho"> blue</span>
                  </div>
                  <div className="my-color">
                    <label className="radio">
                      <input
                        type="radio"
                        name="gender"
                        defaultValue="MALE"
                        defaultChecked
                      />
                      <span className="red" />
                    </label>
                    <label className="radio">
                      <input type="radio" name="gender" defaultValue="FEMALE" />
                      <span className="blue" />
                    </label>
                    <label className="radio">
                      <input type="radio" name="gender" defaultValue="FEMALE" />
                      <span className="green" />
                    </label>
                    <label className="radio">
                      <input type="radio" name="gender" defaultValue="FEMALE" />
                      <span className="orange" />
                    </label>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <i className="fa fa-calendar-check-o" />
                    <span className=" font-weight-bold-ship nho  ml-1">Giao hàng ở nội thành freeShip</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-weight-bold nho">Mô tả sản phẩm</span>
                    <p className="p-nho">{txtDescription}</p>
                  </div>
                </div>
              </div>

              {/* ======các thẻ liên quan=== */}
         
            </div>
          </div>{" "}
          
          <div className="row">
            <div className="col-sm-4 ">
            <div className="border border-primary border-3"></div>
              
              <div className="card mt-2 danh__gia">
                <h6>Đánh giá</h6>
                <div className="d-flex flex-row">
                  <div className="stars">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <span className="ml-1 font-weight-bold">4.6</span>
                </div>
                <hr />
                <div className="badges">
                  <span className="badge  ">All (230)</span>
                </div>
                <hr />
                <div className="comment-section">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/128085745_826009727965927_3013310765086759669_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PiGOk2DXTskAX8Zv1Ti&_nc_ht=scontent.fdad3-3.fna&oh=52107eeb88a85d900a3a9482c6f29b33&oe=61409C19"
                        className="rounded-circle profile-image"
                        alt=""
                      />
                      <div className="d-flex flex-column ml-1 comment-profile">
                        <div className="comment-ratings">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <span className="username">Lê thiện lộc</span>
                      </div>
                    </div>
                    <div className="date">
                      <span className="mr-5">Ngày 12/12/2021</span>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="comment-section">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <img
                        src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-9/128085745_826009727965927_3013310765086759669_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=PiGOk2DXTskAX8Zv1Ti&_nc_ht=scontent.fdad3-3.fna&oh=52107eeb88a85d900a3a9482c6f29b33&oe=61409C19"
                        className="rounded-circle profile-image"
                        alt=""
                      />
                      <div className="d-flex flex-column ml-1 comment-profile">
                        <div className="comment-ratings">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <span className="username">Lê thiện lộc</span>
                      </div>
                    </div>
                    <div className="date">
                      <span className="mr-5">Ngày 12/12/2021</span>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            
           
            <div className="col-sm-7">
            <div className="card mt-2 cac_san_pham_lien_quan">
                <span className="font-weight-bold-ship">Các sản phẩm liên quan</span>

                <div className="similar-products mt-2 d-flex flex-row">
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://i.imgur.com/KZpuufK.jpg" alt="..." />

                    <h6 className="card-title">799000000 vnd</h6>
                  </div>
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                    <h6 className="card-title">456000000 vnd</h6>
                  </div>
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://m.media-amazon.com/images/I/71Ao8Im97TL._AC_UL480_FMwebp_QL65_.jpg" alt="..." />

                    <h6 className="card-title">8529000000 vnd</h6>
                  </div>
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://m.media-amazon.com/images/I/81Vtb-0K3-L._AC_UY327_FMwebp_QL65_.jpg" alt="..." />

                    <h6 className="card-title">763000000 vnd</h6>
                  </div>
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://m.media-amazon.com/images/I/51q7Td1wWUL._AC_UY327_FMwebp_QL65_.jpg" alt="..." />

                    <h6 className="card-title">159000000 vnd</h6>
                  </div>
                  <div className="card border p-1">
                    <img className=" product-dif" src="https://m.media-amazon.com/images/I/71URNvzoWqL._AC_UY327_FMwebp_QL65_.jpg" alt="..." />

                    <h6 className="card-title">79789000000 vnd</h6>
                  </div>
                </div>
                {/* //====hết sản phẩm========== */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart=(itemEditing)=>{
    this.props.onAddToCart(itemEditing);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
  }

}

const mapStateToProps = (state) => {
  return { 
    itemEditing: state.itemEditing
   
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage : (message) => {
        dispatch(actChangeMessage(message));
    }


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
