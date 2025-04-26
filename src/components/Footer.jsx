import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cartIcon from "../assets/cart.png";
import {Link} from 'react-router-dom'
import { useUser } from "../pages/UserContext";

const Footer = () => {
    const { loggedInUser, setLoggedInUser } = useUser();
  return (
    <footer className="bg-body-tertiary  mt-5 py-3 ms-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>
              {" "}
              <img
                src={cartIcon}
                width="32"
                height="32"
                className="d-inline-block align-top mx-2"
                alt="logo"
              />
              Shopping made Interesting
            </h5>
            <p className="">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          {loggedInUser ? (
                 <Col md={6} className="text-md-end fs-5">
                 <p>Browse Our <Link as={Link} to="/products" className="fw-bold text-success mx-1">Products </Link> page for more. </p>
               </Col>
          ):(
            <Col md={6} className="text-md-end fs-5">
            <p style={{color:'gray'}}>Log in to go to home</p>
          </Col>
          )}
     
        </Row>  
      </Container>
    </footer>
  );
};

export default Footer;
