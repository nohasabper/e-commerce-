import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
function NavBar() {
   const cart = useSelector(store => store.cart)
   return (      <Navbar className='fixed-top' bg="primary" expand="lg" >
         <Container>
            <Link to="/react-project/" className='navbar-brand text-light'>ShopApp</Link>
  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <NavLink to="/Products" className='nav-link text-light'>Products</NavLink>
                  <NavLink to="/Users" className='nav-link text-light'>Users</NavLink>
                  <NavLink to="/Apoutus" className='nav-link text-light'>Aboutus</NavLink>

                  <NavLink to="/cart" className='nav-link text-light'><i class="fa-solid fa-cart-shopping"></i><Badge bg="danger">{cart.length}</Badge></NavLink>

               </Nav>
               < div className='nav'>
                  <NavLink to="/Login" className='nav-link text-light'>Login</NavLink>
                  <NavLink to="/Register" className='nav-link text-light'>Register</NavLink>
               </div
               >
{/* 
               <div class="dropdown">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                     Dropdown button
                  </button>
                  <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Link 1</a></li>
                 <li><a class="dropdown-item" href="#">Link 2</a></li>
                    <li><a class="dropdown-item" href="#">Link 3</a></li>
                  </ul>
               </div> */}
            </Navbar.Collapse>
         </Container>
      </Navbar>)



   
}

export default NavBar;