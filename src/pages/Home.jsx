import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const products = [
  {
    title: "iPhone 14 Pro Max",
    text: "Premium iPhone eith 256GB storage ,A16chip and Pro Motion display",
    img: "https://th.bing.com/th/id/OIP.xveu0Wpg1mrvNAQsRLijLAHaE8?w=252&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7",
  },
  {
    title: "Google Pixel 7 Pro",
    text: "Google’s flagship with an amazing camera system and clean Android experience.",
    img: "https://tse2.mm.bing.net/th/id/OIP.Ad_0JzgXUSsHKkVlt2R4FwHaE8?cb=iwc1&rs=1&pid=ImgDetMain",
  },
  {
    title: "OnePlus 11",
    text: "Sleek design with 120Hz AMOLED display and blazing fast charging.",
    img: "https://th.bing.com/th/id/OIP.9QQ11ogezpZE-Qzp2zGxZgHaE8?w=241&h=180&c=7&r=0&o=5&cb=iwc1&pid=1.7",
  },
];

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Hide welcome message after 3 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      const slideTimer = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(slideTimer);
    }
  }, [showWelcome]);

  return (
    <div>
      <section
        className="hero text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage: `url(${showWelcome ? 
            'https://img.freepik.com/premium-vector/abstract-slant-lines-blue-background-gradient_626195-83.jpg?w=1480' : 
            products[slideIndex].img})`,
          minHeight: "500px",
          backgroundSize: "contain",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        <div
          className="text-center slide-in"
          style={{
            zIndex: 2,
            color: "white",
            opacity: 0,
            transform: "translateX(-100px)",
            animation: "slideFromLeft 1s ease-out forwards",
          }}
        >
          {showWelcome ? (
            <>
              <h1 className="display-4 fw-bold">Welcome to Shopping Store</h1>
              <p className="lead">Find the best products at the best prices!</p>
            </>
          ) : (
            <>
              <h1 className="display-4 fw-bold">{products[slideIndex].title}</h1>
              <p className="lead">{products[slideIndex].text}</p>
            </>
          )}
        </div>
      </section>
{/* Features offered by this store */}
      <section className="py-5 bg-light">
  <div className="container">
    <h2 className="text-center mb-4">Why Shop With Us?</h2>
    <div className="row">
      <div className="col-md-4 text-center">
        <i className="bi bi-truck" style={{ fontSize: "3rem" }}></i>
        <h5>Fast Delivery</h5>
        <p>Get your products delivered in no time with our express service.</p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-shield-check" style={{ fontSize: "3rem" }}></i>
        <h5>Secure Payments</h5>
        <p>Shop confidently with secure checkout and multiple payment options.</p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-star" style={{ fontSize: "3rem" }}></i>
        <h5>Top Quality</h5>
        <p>Only the best products from trusted brands and sellers.</p>
      </div>
    </div>
  </div>
</section>

      

      {/* Cards Section */}
      <section className="container py-5">
        <div className="row g-4">
          {products.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow-lg rounded-4 border-0 h-100 card-hover">
                <img
                  src={card.img}
                  className="card-img-top rounded-top-4"
                  alt={card.title}
                  style={{ height: "220px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text ">{card.text}</p>
        
                  <Link as={Link} to="/products" >  <button className="btn btn-outline-primary w-100 mt-auto">
                  🛒 Shop Now
                  </button>  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*my home styles*/}
      <style>
        {`
          @keyframes slideFromLeft {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
            // background-color: silver;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
