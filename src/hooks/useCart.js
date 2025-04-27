import { useState } from 'react';
import axios from 'axios';

function useCart() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');
  const API_URL = "https://json-server-1-c3fk.onrender.com";

  const fetchCart = (userId) => {
    axios.get(`${API_URL}/${userId}`)
      .then(res => setCart(res.data))
      .catch(err => setError(err.message));
  };

  const addToCart = (userId, productId) => {
    axios.get(`${API_URL}/${userId}`)
      .then(res => {
        const existingCart = res.data;
        let updatedProductsId = [...existingCart.productsId];

        const productIndex = updatedProductsId.findIndex(item => item.productId === productId);

        if (productIndex !== -1) {
          // If product exists in cart, increment quantity
          updatedProductsId[productIndex].quantity += 1;
        } else {
          // If product doesn't exist, add it with quantity 1
          updatedProductsId.push({ productId, quantity: 1 });
        }

        return axios.patch(`${API_URL}/${userId}`, { productsId: updatedProductsId });
      })
      .then(res => setCart(res.data))
      .catch(err => setError(err.message));
  };

  const removeFromCart = (userId, productId) => {
    axios.get(`${API_URL}/${userId}`)
      .then(res => {
        const updatedProducts = res.data.productsId.filter(item => item.productId !== productId);
        return axios.patch(`${API_URL}/${userId}`, { productsId: updatedProducts });
      })
      .then(res => setCart(res.data))
      .catch(err => setError(err.message));
  };
  

  return {
    cart,
    error,
    fetchCart,
    addToCart,
    removeFromCart
  };
}

export default useCart;
