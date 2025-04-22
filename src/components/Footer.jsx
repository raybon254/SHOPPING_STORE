import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cartIcon from "../assets/cart.png";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary  mt-5 py-3 ms-auto">
      <Container>
        <Row>
          <Col md={6}>
          
            <h5> <img
                        src={cartIcon}
                        width="32"
                        height="32"
                        className="d-inline-block align-top mx-2"
                        alt="logo"
                      />Shopping made Interesting</h5>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end fs-5">
            <p>
              Browse to see Latest Products
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
