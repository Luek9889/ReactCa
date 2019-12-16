import React        from 'react';
import ProductsList from './ProductList';

import Cart         from '../lib/Cart';
import Bar          from './Bar';
import Checkout from './Checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../lib/sass/App.scss';
class App extends React.Component {

  // Note the cart object is just a vanilla JS
  // custom type (see lib/Cart.js)
  state = {
    cart : new Cart()
  }

  // Render
  render() {
    return (
      
      <div className='App'>
        <Bar cart={this.state.cart}/>
        <ProductsList cart={this.state.cart} />
        
        <Checkout/>
      </div>
    );
  }
}

export default App;
