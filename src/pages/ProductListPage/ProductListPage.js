import React, { Component } from 'react';
import ProductItem from '../../components/ProducItem';
import ProductList from "../../components/ProductList" 
import {connect} from 'react-redux';
import {Link } from "react-router-dom";
import  {actFetchProductsRequest,actDeleteProductRequest,actAddToCart,actChangeMessage} from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
 
    
    onDelete = (id) => {
 
        this.props.onDeleteProduct(id);
        
    }
   


    render() {

        var { products }  = this.props;

        return (
            <div className="containe">
           <div className="col-sm-12 mx-auto">
             <Link to="/product/add"><button className="btn btn-info my-3">Thêm sản phẩm</button></Link>  
               <ProductList>
                   {this.showProducts(products)}
               </ProductList>
           </div>
        </div>
        );
    }
    showProducts(products){
            var result = null;
            if(products.length > 0){
                result = products.map((product,index)=>{
                    return (
                        <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                        />
                    );
                });
            }
            return result;
    }
}
const mapStateToProps = state => {
    return{
        products: state.products
    }  
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllProducts : () => { 
            dispatch(actFetchProductsRequest());
        },

        onDeleteProduct : (id) => { 
            dispatch(actDeleteProductRequest(id));
        },
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);
