import React, { Component } from 'react';
import HomeList from '../../components/HomeList';
import HomeItem from "../../components/HomeItem" 
import {connect} from 'react-redux';
import  {actFetchProductsRequest} from '../../actions/index';
import { actAddToCart, actChangeMessage } from '../../actions/index';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }
    render() {
        
        var { products }  = this.props;
        return (
           <div className="">
               <HomeList >
                   {this.showProducts(products)}
               </HomeList>
           </div>
        );
    }
    showProducts(products){
            var result = null;
            var { onAddToCart ,onChangeMessage} = this.props;
            if(products.length > 0){
                result = products.map((product,index)=>{
                    return (
                        <HomeItem
                        key={index}
                        product={product}
                        index={index}
                        onAddToCart = {onAddToCart} 
                        onChangeMessage = {onChangeMessage}
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
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }

     }
}
export default connect(mapStateToProps, mapDispatchToProps) (HomePage);
