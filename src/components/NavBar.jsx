import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useUser } from "../pages/UserContext";
import cartIcon from "../assets/cart.png";

const NavBar = () => {
  const { loggedInUser, setLoggedInUser } = useUser();
  const location = useLocation();
const navigate=useNavigate()
  const isActive = (path) =>
    location.pathname === path ? "text-success fw-bold" : "";

  if (!loggedInUser) return null;
const logOut=()=>{
    if(loggedInUser.type == "admin"){
    setLoggedInUser(null)
    navigate('/admin-login')
  }else {
    setLoggedInUser(null)
    navigate('/user-login')
  }

}

  return (
<Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
  <Container>
    {/* Logo and Brand */}
    <Navbar.Brand as={Link} to="/">
      <img
        src={cartIcon}
        width="32"
        height="32"
        className="d-inline-block align-top me-2"
        alt="Cart Logo"
      />
      <span className="fw-medium fs-4">
        Shopping<span className="text-success mx-1">Store</span>
      </span>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      {/* Center Nav Links - Display only for 'user' */}
      {loggedInUser.type === 'user' && (
        <Nav className="mx-auto fs-5">
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
        </Nav>
      )}

      {/* Always Show Products Link for Non-'user' */}
      {loggedInUser.type=='admin' && ( 
      <div>   <Nav className="fs-5">
      <Nav.Link as={Link} to="/products" className={isActive("/products")}>
        Products
      </Nav.Link>
    </Nav>
    <Nav className="fs-5">
      <Nav.Link as={Link} to="/create-product" className={isActive("/create-product")}>
        Create product
      </Nav.Link>
    </Nav> </div>
     )}
    

      {/* Right side User Info + Logout */}
      <div className="d-flex align-items-center gap-3">
        <div className="text-end">
          <div className="fw-semibold">
            {loggedInUser.name} ({loggedInUser.type})
          </div>
          <small className="text-muted">
            {loggedInUser.email ? loggedInUser.email : 'Admin (no email)'}
          </small>
        </div>

        <button className="btn btn-outline-danger btn-sm" onClick={logOut}>
          Log Out
        </button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavBar;
