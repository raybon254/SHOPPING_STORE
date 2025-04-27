import React, { useEffect, useState } from 'react';
import sneaker1 from '../assets/pics/download (1).jpeg';
import sneaker2 from '../assets/pics/download (2).jpeg';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';
import { useUser } from "../pages/UserContext";

const Cart = () => {
    const { loggedInUser, setLoggedInUser } = useUser();
const [cart, setCart] = useState([]);
  const API_URL = 'https://json-server-1-c3fk.onrender.com/cart';
const [products,setProducts]=useState([])
  const getCartItems = async () => {
    try {
      const response = await fetch(`${API_URL}/${loggedInUser.id}`);
      const items = await response.json(); // <- await here
      setCart(items);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    getCartItems(); //
  }, []); 

  console.log(cart);

console.log('Cart ids',cart.productsId)
useEffect(() => {
  const fetchProductDetails = async () => {
    if (cart.productsId && cart.productsId.length > 0) {
      try {
        const productPromises = cart.productsId.map((item) =>
          fetch(`https://json-server-1-c3fk.onrender.com/products/${item.productId}`)
            .then(res => res.json())
            .then(product => ({
              ...product,
              quantity: item.quantity  
            }))
        );

        const productDetails = await Promise.all(productPromises);
        console.log('Product Details:', productDetails); 
        setProducts(productDetails);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
  };

  fetchProductDetails();
}, [cart]);


  console.log('Products Items',products)



  const handleQuantityChange = async (userId, productId, action) => {
    try {
      // Fetch the current user's cart
      const fetchedCart = await fetch('https://json-server-1-c3fk.onrender.com/cart');
      const allCarts = await fetchedCart.json();
  
      const userCart = allCarts.find(user => user.id === userId);
  
      if (!userCart) {
        console.error('User cart not found');
        return;
      }
  
      let updatedProducts = userCart.productsId.map(product => {
        if (product.productId === productId) {
          // If action is increase, add 1 to quantity
          if (action === 'increase') {
            product.quantity += 1;
            setCart(prev => ({
              ...prev,
              productsId: prev.productsId.map(one =>
                one.productId === productId
                  ? { ...one, quantity: one.quantity + 1 }
                  : one
              )
            }));
          } 
          // If action is decrease, subtract 1 but ensure it doesn't go below 1
          else if (action === 'decrease') {
            const newQuantity = Math.max(product.quantity - 1, 1);
            product.quantity = newQuantity;
            setCart(prev => ({
              ...prev,
              productsId: prev.productsId.map(one =>
                one.productId === productId
                  ? { ...one, quantity: newQuantity }
                  : one
              )
            }));
          }
        }
        return product;
      });
  
      updatedProducts = updatedProducts.filter(product => product.quantity > 0);
  
      // Update the backend (db.json)
      const response = await fetch(`https://json-server-1-c3fk.onrender.com/cart/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productsId: updatedProducts }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update cart');
      }
  
      console.log('Cart updated successfully');
  
      // Optionally update the frontend state with setProducts
      setProducts(prevProducts =>
        prevProducts.map(user => {
          if (user.id === userId) {
            return { ...user, productsId: updatedProducts };
          }
          return user;
        })
      );
  
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };
  
  
  

  const handleCheckout = () => {
    alert('Proceeding to checkout...');

  };
  console.log("Cart is ",cart)
  const totalQuantity = cart.productsId?.reduce((sum, item) => sum + item.quantity, 0);
  console.log('Total quantity is',totalQuantity)
  const total = products.reduce(
    (sum, item) => sum + item.price * totalQuantity,
    0
  );

  const deleteProductFromCart = async (userId, productIdToDelete) => {
    try {
      // Fetch the user's cart 
      const res = await fetch(`https://json-server-1-c3fk.onrender.com/cart/${userId}`);
      const cart = await res.json();
  
      if (!cart.productsId) {
        console.error('No products found for this user.');
        return;
      }
  
      // Removing the product with matching productId
      const updatedProductsId = cart.productsId.filter(
        (item) => item.productId !== productIdToDelete
      );
  
      // PATCH the updated cart
      const patchRes = await fetch(`https://json-server-1-c3fk.onrender.com/cart/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productsId: updatedProductsId }),
      });
  
      if (!patchRes.ok) {
        throw new Error('Failed to update cart.');
      }
  
      console.log(`Product ${productIdToDelete} removed successfully.`);
  
      // Update local cart state
      setCart((prev) => ({
        ...prev,
        productsId: updatedProductsId,
      }));
  
    } catch (error) {
      console.error('Error deleting product from cart:', error);
    }
  };

  const totalPrice = products
  .reduce((acc, one) => acc + (one.price * one.quantity), 0);

  
  return (
    <div className="container my-4">
      <h3 className="mb-4">Your Cart</h3>
      
      {products.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            {products.map((item) => (
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
                            onClick={() => handleQuantityChange(loggedInUser.id, item.id, 'decrease')}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => handleQuantityChange(loggedInUser.id, item.id, 'increase')}
                          >
                            +
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <p className="card-text mb-0">
                            <strong>Subtotal:</strong>{' '}
                            Ksh {(item.quantity * item.price).toLocaleString()}
                          </p>
                          <p></p>
                          <FaTrash size={25} onClick={() => deleteProductFromCart(loggedInUser.id, item.id)} className="text-danger" style={{ cursor: 'pointer' }}
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
            <h4>Total: Ksh {totalPrice.toLocaleString()}</h4>
       
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
