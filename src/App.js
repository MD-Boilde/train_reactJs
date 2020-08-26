import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Menu';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import routes from './routes';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Menu />
          {/* <ProductList/> */}
          <div className='container'>
            <div className= 'row'>
              {this.showContentMenu(routes)}
            </div>

          </div>
          
        </div>
      </Router>
      
      
    );
  }
  showContentMenu = (routes) => {
      var result = null;
      if (routes.length >0){
        result = routes.map((route,index) =>{
          return(
            <Route
              key ={index}
              path = {route.path}
              exact = {route.exact}
              component={route.main}
          />
          )
        })
      }
      return <Switch>{result}</Switch>
  }
}

export default App;
