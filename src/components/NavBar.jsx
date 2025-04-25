import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import cartIcon from "../assets/cart.png";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-success fw-bold" : "";

  return (
    <Navbar expand="lg" className="text-dark">
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

        <Navbar.Brand as={Link} to="/" className="fw-medium  fs-4">
          Shopping  <span className="fw-medium fs-4  text-success mx-1"> Store</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mx-4 p-2 fs-5">
            <Nav.Link as={Link} to="/" className={isActive("/")}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className={isActive("/products")}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={isActive("/about")}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" className={isActive("/cart")}>
              Cart
            </Nav.Link>

            <NavDropdown title="Log in" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login-user" className={isActive("/login-user")}>
                Log in As User
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login-admin" className={isActive("/login-admin")}>
                Log in As Admin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
