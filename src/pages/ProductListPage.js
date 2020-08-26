import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import ProductItem from '../components/ProductItem';
import axios from 'axios';
import callApi from './../utils/apiCalller';
class ProductListPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : []
    };
  }

  componentDidMount(){
      callApi('products', 'GET',null).then(res =>{
        this.setState({
          products :res.data
        });
      })
  }

  onDelete = (id)=>{
    var { products} = this.state;
    callApi(`products/${id}`,'DELETE',null).then(res =>{
      if (res.status === 200) {
        products = products.filter( product => product.id !== id );
        this.setState({
            products: products
        })
    }
    })
  }
  render () {
      // var products = [];
      var { products} =this.state;
    return (
      <div className='container'>
          <ProductList>
              {this.showProduct(products)}
          </ProductList>
        
      </div>
      
      
    );
  }
  showProduct (products){
      var result = null;
        if (products.length >0){
            result = products.map((product,index)=> {
            
                return (
                    <ProductItem
                        key = {index}
                        product = {product}
                        index ={index}
                        onDelete ={this.onDelete}
                    />
                );
            });
        }
      return result;
  }
}

export default ProductListPage;