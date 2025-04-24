import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  // Product data
  const products = [
    {
      title: 'Smart Watch',
      description: 'Stay connected with our latest smartwatch featuring fitness tracking, notifications, and a sleek design.',
      imageUrl: 'https://images.samsung.com/is/image/samsung/assets/ro/2307/pcd/Watch_PCD_WatchNew_Watch6Classic_pc.png?$376_376_PNG$', 
    },
    {
      title: 'Laptop',
      description: 'Power through your tasks with our high-performance laptop, perfect for work and entertainment.',
      imageUrl: 'https://saruk.co.ke/_next/image?url=https%3A%2F%2Fsaruk-web-images.s3.eu-north-1.amazonaws.com%2FVictus%2520Gaming%2520Laptop%252016-r0010nia.%252C%252C.png&w=640&q=75', 
    },
    {
      title: 'Headphones',
      description: 'Immerse yourself in music with our noise-canceling headphones, designed for comfort and superior sound.',
      imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTQ3?wid=1377&hei=2057&fmt=jpeg&qlt=95&.v=1741643688229', 
    },
  ];

  // Owners data
  const owners = [
    { name: 'Larry Kipkurui', role: 'Full stack Dev', imageUrl: '' }, 
    { name: 'Liam Naule', role: 'Full stack Dev', imageUrl: '' },
    { name: 'Kelvin Ndunda', role: 'Full stack Dev', imageUrl: '' },
    { name: 'Brian Musyimi', role: 'Full stack Dev', imageUrl: '' },
    { name: 'Mike Bett', role: 'Full stack Dev', imageUrl: '' },
  ];

  return (
    <Container className="about-page-container my-5">
      {/* Mission Statement */}
      <section className="mission-section text-center mb-5">
        <h1>About Our Shopping Cart</h1>
        <p className="mission-description lead">
          Our mission is to provide a seamless and delightful shopping experience, offering innovative and high-quality
          electronics that enhance your lifestyle. We strive to make technology accessible, reliable, and affordable for
          everyone.
        </p>
      </section>

      {/* Product Quality */}
      <section className="product-quality-section mb-5">
        <h2 className="section-title text-center mb-4">Quality of Our Products</h2>
        <p className="section-description text-center">
          We are committed to delivering products that meet the highest standards of quality and performance. Each item in
          our catalog, from smartwatches to laptops and headphones, is carefully selected and tested to ensure durability,
          functionality, and customer satisfaction. Our products are designed to integrate seamlessly into your daily life,
          offering cutting-edge technology and exceptional value.
        </p>
      </section>

      {/* Product Cards */}
      <section className="featured-products-section mb-5">
        <h2 className="section-title text-center mb-4">Our Featured Products</h2>
        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index} className="product-card-col mb-4">
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Owners Section */}
      <section className="team-section">
        <h2 className="section-title text-center mb-4">Meet Our Team</h2>
        <Row>
          {owners.map((owner, index) => (
            <Col md={2} key={index} className="team-member-col mb-4 text-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={owner.imageUrl}
                  alt={owner.name}
                  style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%', margin: 'auto', marginTop: '10px' }}
                />
                <Card.Body className="team-member-card-body">
                  <Card.Title>{owner.name}</Card.Title>
                  <Card.Text>{owner.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default About;
