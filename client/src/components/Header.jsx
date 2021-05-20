import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Nav.Link as={NavLink} to='/'>
            <Navbar.Brand>PROshop</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link as={NavLink} to='/cart'>
                <i className='fas fa-shopping-cart mr-1'></i>Cart
              </Nav.Link>
              <Nav.Link as={NavLink} to='/login'>
                <i className='fas fa-user mr-1'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
