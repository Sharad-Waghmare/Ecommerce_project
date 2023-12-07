import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getCartsAll } from '../../Store/Cart/Action';

function NavbarComp() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getCartsAll())
  },[])

  const cartData = useSelector((state) => state.cart.carts)
  // console.log(cartData.lenght);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="#home">Hexashop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/product">Product</NavLink>
            <NavLink className="nav-link" to="/cart">< i className="fa-solid fa-cart-shopping m-2"></i> {cartData.result? cartData.result: ""}</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;