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
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="mx-autoo">
                    <span className={`padding-10 ${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger mx-2"
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