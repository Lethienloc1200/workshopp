import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'bg-primary rounded' : 'rounded bg-warning';
        return (
            <tr>
                <td className="stt__STT">{index + 1}</td> 
                <td className="stt__Ma">{product.id}</td>
                <td className="stt__Ten"><b>{product.name}</b></td>
                <td className="stt__MoTa">{product.descript}</td>
                <td className="stt__HinhAnh"><img className="stt__img" src= {`${product.image}`}  alt=""/> </td>
                <td className="stt__Gia"><b>{product.price} vnd</b></td>
                <td className="mx-autoo stt__TrangThai">
                    <span className={`padding-10 ${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td className="stt__HanhDong">
                    <Link
                        to={`/product/${product.id}/edit`}
                        
                    >
                       <button className="btn btn-success  btn_edit mr-1"> Sửa</button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger  btn_edit"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;