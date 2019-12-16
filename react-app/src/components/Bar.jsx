import React from 'react';
import ViewCart from './ViewCart';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import  '../lib/sass/Bar.scss';
class Bar extends React.Component {

    render() {
        return (
          
            <Navbar className='bar'  expand="lg">
  <Navbar.Brand href="#home"><h1>Lukes E Store</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
     <div className='linkrs'> <Nav.Link href="index.html"><h2>Home</h2></Nav.Link></div>
     
      
    </Nav>
    <div className ='view2'>
    <ViewCart cart={this.props.cart} />
    </div>
  </Navbar.Collapse>
</Navbar>

        
        
        );
    }
}

export default Bar;