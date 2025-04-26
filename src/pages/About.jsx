import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

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

  // FAQ/Accordion data
  const faqs = [
    {
      question: 'What makes our shopping store unique?',
      answer: 'Our store stands out by offering high-quality electronics curated for performance and durability, backed by a seamless shopping experience and exceptional customer support.',
    },
    {
      question: 'How do we ensure product quality?',
      answer: 'Every product undergoes rigorous testing to meet industry standards, ensuring reliability, functionality, and customer satisfaction.',
    },
    {
      question: 'What is our return policy?',
      answer: 'We offer a 30-day return policy for unused products in their original packaging, with a full refund or exchange, subject to terms and conditions.',
    },
    {
      question: 'Do we ship internationally?',
      answer: 'Yes, we ship to select international destinations. Shipping costs and delivery times vary based on location.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you’ll receive a tracking number via email to monitor your package’s progress.',
    },
  ];

  return (
    <Container className="about-page-container my-5">
      {/* Mission Statement */}
      <section className="mission-section text-center mb-5">
        <h2>About Our Shopping Cart</h2>
        <p className="mission-description">
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
            <Col lg={4} md={6} key={index} className="product-card-col mb-4">
              <Card className="product-card h-100">
                <Card.Img
                  variant="top"
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    height: '300px',
                    objectFit: 'contain',
                    padding: '10px',
                    backgroundColor: '#f8f9fa',
                  }}
                  className="img-fluid"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{product.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* FAQ Accordion */}
      <section className="faq-section mb-5">
        <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={12} className="mb-4 text-center">
            <p><strong>Email:</strong> support@shoppingstore.com</p>
            <p><strong>Phone:</strong> 0723343245</p>
            <p><strong>Address:</strong> Ngong road, Nairobi, Kenya</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 9 AM - 5 PM</p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;