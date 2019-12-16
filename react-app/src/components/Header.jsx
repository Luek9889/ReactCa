import React    from 'react';
import ViewCart from './ViewCart';

class Header extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <ViewCart cart={this.props.cart} />
      </div>
    );
  }

}

export default Header;