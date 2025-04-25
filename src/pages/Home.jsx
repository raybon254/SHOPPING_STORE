import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  return (
    <div>
      <section
        className="hero text-white d-flex align-items-center justify-content-center position-relative"
        style={{
          backgroundImage:
            'url(https://tse1.mm.bing.net/th/id/OIP.nDeQgnPOSsLzUKwS1oeKGQHaE4?rs=1&pid=ImgDetMain)',
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
       {/*First display text*/}
        <div style={{ zIndex: 2, textAlign: "center" }}>
          <h1 className="display-4 fw-bold">Welcome to Group 3 Store</h1>
          <p className="lead">Find the best products at the best prices!</p>
        </div>
      </section>
    {/*Cards Section*/}
      <section className="container py-5">
        <div className="row g-4">
          {[
            {
              title: "Wireless Headphones",
              text: "Enjoy premium sound quality with long battery life.",
              img: "https://th.bing.com/th/id/OIP.ZDzKikWCh-7neOYvkknPowHaE8?w=302&h=201&c=7&r=0&o=5&pid=1.7",
              btn: "Shop Now",
            },
            {
              title: "Smartwatch",
              text: "Keep track of your health and notifications on the go.",
              img: "https://th.bing.com/th/id/R.0e9ac20138f5340e4bb2fbf4857d7037?rik=Bwe9acRY8PgxdQ&pid=ImgRaw&r=0",
              btn: "Buy Now",
            },
            {
              title: "Gaming laptop",
              text: "Enjoy the best gameplay the world has ever seen .",
              img: "https://kaizenaire.com/wp-content/uploads/2023/12/image-1702.jpeg",
              btn: "Explore Now",
            },
            
          ].map((card, index) => (/*iterates and creates new jsx for each element*/
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
                    {card.btn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>
        {`
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }
        `}
      </style>
    </div>
  );
};

export default Home;
