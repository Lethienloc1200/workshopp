import React, { Component } from 'react';
import ProductItem from '../../components/ProducItem';
import ProductList from "../../components/ProductList" 
import {connect} from 'react-redux';
import axios from 'axios';
import callApi from '../../utils/apiCaller';
import {Route, Link } from "react-router-dom";
import  {actFetchProductsRequest,actDeleteProductRequest} from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
 
    
    onDelete = (id) => {
        // var {products}= this.state;
        // callApi(`products/${id}`,'DELETE', null).then(res => {
        //    if(res.status ===200){
        //      var index = this.findIndex(products, id); //trong class == this.findIndex
        //      if(index !== -1){
        //          products.splice(index, 1);
        //          this.setState({
        //              products:products
        //          });
        //      }
        //    }
        // });
        this.props.onDeleteProduct(id);
        
    }
   


    render() {

        var { products }  = this.props;

        return (
            <div className="container">
           <div className="col-sm-12">
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
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductListPage);
