import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const About = () => {
  // Testimonials data (focused on phones)
  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'I purchased a smartphone from this store, and it’s incredible! The camera quality is stunning, and the battery life lasts all day. The support team was super helpful with setup.',
      rating: '★★★★★',
    },
    {
      name: 'James K.',
      text: 'The phone I bought has been perfect for work and gaming. It’s fast, reliable, and was delivered in just two days. Great customer service when I had a question about the warranty.',
      rating: '★★★★☆',
    },
    {
      name: 'Emma W.',
      text: 'This is the best phone I’ve ever owned! The display is vibrant, and the performance is flawless. I also love the eco-friendly packaging it came in.',
      rating: '★★★★★',
    },
  ];

  // FAQ/Accordion data
  const faqs = [
    {
      question: 'What makes our shopping store unique?',
      answer: 'Our store specializes in offering top-tier smartphones curated for performance, innovation, and durability, backed by a seamless shopping experience and exceptional customer support.',
    },
    {
      question: 'How do we ensure product quality?',
      answer: 'Every phone undergoes rigorous testing to meet industry standards, ensuring superior performance, reliability, and customer satisfaction.',
    },
    {
      question: 'What is our return policy?',
      answer: 'We offer a 30-day return policy for unused phones in their original packaging, with a full refund or exchange, subject to terms and conditions.',
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
          smartphones that enhance your lifestyle. We strive to make cutting-edge mobile technology accessible, reliable, and affordable for everyone.
        </p>
      </section>

      {/* Product Quality */}
      <section className="product-quality-section mb-5">
        <h2 className="section-title text-center mb-4">Quality of Our Phones</h2>
        <p className="section-description text-center">
          We are committed to delivering smartphones that meet the highest standards of quality and performance. Each phone in
          our catalog is carefully selected and tested to ensure durability, advanced functionality, and customer satisfaction. Our phones are designed to integrate seamlessly into your daily life,
          offering cutting-edge technology, stunning displays, and exceptional value.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section mb-5">
        <h2 className="section-title text-center mb-4">Customer Testimonials</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} key={index} className="testimonial-card-col mb-4">
              <Card className="testimonial-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">{testimonial.name}</Card.Title>
                  <Card.Text className="flex-grow-1">{testimonial.text}</Card.Text>
                  <Card.Text className="text-center text-warning">{testimonial.rating}</Card.Text>
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