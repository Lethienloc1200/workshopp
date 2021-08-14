import React, { Component } from "react";
import ProductItem from "./ProducItem";
import "../css/ProductList.css"

class QuanLySP extends Component {
  render() {
    return (
      <div className="container">
        <div className="panel panel-primary border border-primary border-5 rounded">
          <div className="panel-heading">
            <h3 className="panel-title mb-4  bg-primary ">Danh Sách Sản Phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>

                {this.props.children}
  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default QuanLySP;
