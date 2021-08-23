import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Route, Link } from "react-router-dom";
import  {actAddProductRequest,actGetProductRequest,actUpdateProductRequest} from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtDescription: "",
      txtImage: "",
      txtPrice: "",
      chkbStatus: ""
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice,txtDescription,txtImage, chkbStatus } = this.state;
    var { history } = this.props;
    var product = {
      id :id,
      name:txtName,
      descript:txtDescription,
      image:txtImage,
      price: txtPrice,
      status: chkbStatus
      
    };

    if (id) {
      //nếu có id thì update

      this.props.onUpdateProduct(product);
      history.goBack();
    } else {
      //==> Thêm sản phẩm
      
      this.props.onAddProduct(product);
      history.goBack();
    }
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;

      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
        var {itemEditing} = nextProps;
        this.setState({
            id : itemEditing.id,
            txtName : itemEditing.name,
            txtDescription : itemEditing.descript,
            txtImage : itemEditing.image,
            txtPrice : itemEditing.price,
            chkbStatus : itemEditing.status
        });
    }
}



  render() {
    var { txtName, txtPrice,txtDescription,txtImage, chkbStatus } = this.state;
    return (
      <div className="container">
        <div className="col-sm-12">
          <form
            onSubmit={this.onSave}
            className="border border-primary  rounded  form-edit "
          >
            <div className="form-group">
              <label for="">Tên sản phẩm</label>
              <input
                type="text"
                name="txtName"
                value={txtName}
                onChange={this.onChange}
                className="form-control"
                placeholder="Nhập vào tên Sản Phẩm"
              />
            </div>
{/* //mô tả */}
            <div className="form-group">
              <label for="">Mô tả sản phẩm</label>
              <input
                type="text"
                name="txtDescription"
                value={txtDescription}
                onChange={this.onChange}
                className="form-control"
                placeholder="Nhập vào  mô tả Sản Phẩm"
              />
            </div>
        
            <div className="form-group">
              <label for="">Hình ảnh</label>
              <input
                type="text"
                name="txtImage"
                value={txtImage}
                onChange={this.onChange}
                className="form-control"
                placeholder="Nhập vào link ảnh Sản Phẩm"
              />
            </div>

            <div className="form-group">
              <label for="">Giá</label>
              <input
                type="number"
                name="txtPrice"
                value={txtPrice}
                onChange={this.onChange}
                id=""
                className="form-control"
                placeholder="Nhập vào giá"
              />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="chkbStatus"
                value={chkbStatus}
                onChange={this.onChange}
                checked={chkbStatus}
                id=""
                className="form-check-input ml-0"
              />
              <label for="" className="ml-4">
                Còn hàng
              </label>
            </div>
            <Link to="/QLSP">
              <i className="fas fa-hand-point-left"> Trở lại </i>
            </Link>

            <button type="submit" className="btn btn-primary ml-4">
              Lưu lại
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      itemEditing : state.itemEditing
  }
}

const mapDispatchToProps= (dispatch, props) =>{
  return {
    onAddProduct : (product) =>{
      dispatch(actAddProductRequest(product));
    },
    onEditProduct : (id) =>{
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct : (product) =>{
      dispatch(actUpdateProductRequest(product));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( ProductActionPage);
