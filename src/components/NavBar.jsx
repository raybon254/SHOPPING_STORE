import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import cartIcon from "../assets/cart.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={cartIcon}
            width="32"
            height="32"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-3 p-2  fs-5">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>

            <NavDropdown title="Log in" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Log in As User
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Log in As Admin{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
