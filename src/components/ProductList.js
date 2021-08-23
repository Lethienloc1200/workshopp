import React, { Component } from "react";
import "../css/ProductList.css"

class QuanLySP extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 nho">
        <div className="panel panel-primary border border-primary border-5 rounded">
          <div className="panel-heading">
            <h3 className="panel-title mb-4  bg-primary ">Danh Sách Sản Phẩm</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead className="thead">
                <tr>
                  <th className="stt__STT">STT</th>
                  <th className="stt__Ma">Mã</th>
                  <th className="stt__Ten">Tên</th>
                  <th className="stt__MoTa">Mô tả</th>
                  <th className="stt__HinhAnh">Hình ảnh</th>
                  <th className="stt__Gia">Giá</th>
                  <th className="stt__TrangThai">Trạng Thái</th>
                  <th className="stt__HanhDong">Hành Động</th>
                </tr>
              </thead>
              <tbody>

                {this.props.children}
  
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default QuanLySP;
