import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 mx-auto">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Không tìm thấy</h4>
            <p></p>
            <p className="mb-0">404 not default </p>
          </div>
        </div>
      </div>
    );
  }
}
export default NotFoundPage;
