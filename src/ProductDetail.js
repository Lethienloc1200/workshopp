import React from "react";
import "./css/ProductDetail.css";

function ProductDetail() {
  return (
    <div>
    
      <div className="container-fluid mt-5 mb-5">
        <div className="row mb-5">
          <h1 className="mx-auto">Chi tiết sản phẩm</h1>
          </div>
        <div className="row">
           
          {/* ===============col-5555555555555 */}
          <div className="col-md-4 mr-5 ml-3">
            <div className="card">
              <div className="demo">
                <ul id="lightSlider">
                  <img src="https://i.imgur.com/KZpuufK.jpg" />
                </ul>
              </div>
            </div>
            <div className="card mt-2">
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
                      src="https://i.imgur.com/tmdHXOY.jpg"
                      className="rounded-circle profile-image"
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
                      src="https://i.imgur.com/tmdHXOY.jpg"
                      className="rounded-circle profile-image"
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

          {/* //================col-77777777777777===================== */}
          <div className="col-md-7">
            <div className="card">
              <div >
                  <i className="fa fa-star" /> 
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                   <i className="fa fa-star" />

              </div>
              <div className="about">
                
                <span className="font-weight-bold">
              ĐIỆN THOAI
                </span>
                <h4 className="font-weight-bold">$3,444</h4>
              </div>
              <div className="buttons ">
                
                <button className="btn btn-info">
                  Thêm vào giỏ hàng
                </button>
                <button className="btn btn-info ml-2 mr-5 ">
                  Mua ngay
                </button>
                <button className="btn btn-light wishlist ml-5">
                  
                  <i className="fa fa-heart" />
                </button>
              </div>
              <hr />
              {/* //======Mô tả sản phẩm */}
              <div className="product-description">
                <div>
                  <span className="font-weight-bold">Color:</span>
                  <span> blue</span>
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
                    
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="FEMALE"
                    />
                    <span className="blue" />
                  </label>
                  <label className="radio">
                    
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="FEMALE"
                    />
                    <span className="green" />
                  </label>
                  <label className="radio">
                    
                    <input
                      type="radio"
                      name="gender"
                      defaultValue="FEMALE"
                    />
                    <span className="orange" />
                  </label>
                </div>
                <div className="d-flex flex-row align-items-center">
                  
                  <i className="fa fa-calendar-check-o" />
                  <span className="ml-1">Delivery from sweden, 15-45 days</span>
                </div>
                <div className="mt-2">
                  
                  <span className="font-weight-bold">Mô tả sản phẩm</span>
                  <p>
                    The minimalist collaboration features chairs, lightening,
                    Shelves, Sofas, Desks and various home accessories, all
                    offering form and function at the same point.We use
                    high-strength clamps and joinery techniques specially
                    designed for engineered wood beds. Ergo, no irksome creaks -
                    and you can sleep like a baby, well into adulthood!
                  </p>
           
                </div>
            
         
              </div>
            </div>

            {/* ======các thẻ liên quan=== */}
            <div className="card mt-2">
              
              <span>Các sản phẩm liên quan</span>

              <div className="similar-products mt-2 d-flex flex-row">
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
                </div>
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
                </div>
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
                </div>
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
                </div>
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
                </div>
                <div className="card border p-1">
              
                  <img src="https://i.imgur.com/KZpuufK.jpg" alt="..."/>
               
                    <h6 className="card-title">$1,999</h6>
    
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

export default ProductDetail;
