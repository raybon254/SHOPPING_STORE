import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    title: "Wireless Headphones",
    text: "Enjoy premium sound quality with long battery life.",
    img: "https://tse1.mm.bing.net/th/id/OIP.Ll3ZJh3h1Qxg67-VjQMTvQHaE8?cb=iwc1&rs=1&pid=ImgDetMain",
  },
  {
    title: "Smartwatch",
    text: "Keep track of your health and notifications on the go.",
    img: "https://th.bing.com/th/id/OIP.WNNzF19w5e8sV7fJdNuCYwHaE8?w=274&h=183&c=7&r=0&o=5&cb=iwc1&pid=1.7",
  },
  {
    title: "Gaming Laptop",
    text: "Enjoy the best gameplay the world has ever seen.",
    img: "https://kaizenaire.com/wp-content/uploads/2023/12/image-1702.jpeg",
  },
];

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Hide welcome message after 6 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 6000);

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
          backgroundSize: "cover",
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
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <button className="btn btn-outline-primary w-100">
                  🛒 Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Animations */}
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
            background-color: silver;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
