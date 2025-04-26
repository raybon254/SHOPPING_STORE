import React, { useState } from 'react';
import sneaker1 from '../assets/pics/download (1).jpeg';
import sneaker2 from '../assets/pics/download (2).jpeg';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 13',
      price: 95000,
      quantity: 1,
      image: sneaker1,
    },
    {
      id: 2,
      name: 'Samsung Galaxy A14',
      price: 18000,
      quantity: 2,
      image: sneaker2,
    },
    {
      id: 3,
      name: 'iPhone 13',
      price: 95000,
      quantity: 1,
      image: sneaker1,
    },
    {
      id: 4,
      name: 'Samsung Galaxy A14',
      price: 18000,
      quantity: 2,
      image: sneaker2,
    },
    {
      id: 5,
      name: 'iPhone 13',
      price: 95000,
      quantity: 1,
      image: sneaker1,
    },
    {
      id: 6,
      name: 'Samsung Galaxy A14',
      price: 18000,
      quantity: 2,
      image: sneaker2,
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    // You can redirect or perform real checkout logic here
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h3 className="mb-4">Your Cart</h3>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-6 mb-3" key={item.id}>
                <div className="card">
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start"
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          <strong>Price:</strong> Ksh {item.price.toLocaleString()}
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => handleDecrease(item.id)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => handleIncrease(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text mb-0">
                            <strong>Subtotal:</strong>{' '}
                            Ksh {(item.quantity * item.price).toLocaleString()}
                          </p>
                          <FaTrash size={25} onClick={() => handleDelete(item.id)} className="text-danger" style={{ cursor: 'pointer' }}
 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: Ksh {total.toLocaleString()}</h4>
            <button className="btn btn-success mt-2" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
