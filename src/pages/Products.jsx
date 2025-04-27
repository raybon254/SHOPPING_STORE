import React from "react";
import {  useFetch } from "../components/ContextFetch";
import Swal from "sweetalert2";
import { useUser } from "../pages/UserContext";
import useCart from "../hooks/useCart";
// import { set } from "date-fns";
// import { useState } from "react";

const Products = () => {

      const { loggedInUser, setLoggedInUser } = useUser();
      const addProductToCart = async (userId, productId) => {
        try {
          // 1. Fetch all carts
          const res = await fetch(`http://localhost:3000/cart`);
          const allCarts = await res.json();
      
          // 2. Find if user's cart already exists
          const userCart = allCarts.find(cart => cart.id === userId);
      
          if (userCart) {
            // If cart exists: check if product already exists
            const existingProduct = userCart.productsId.find(
              (item) => item.productId === productId
            );
      
            let updatedProductsId;
      
            if (existingProduct) {
              // Product exists: increase quantity
              updatedProductsId = userCart.productsId.map(item => 
                item.productId === productId 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              );
            } else {
              // Product doesn't exist: add new product
              updatedProductsId = [
                ...userCart.productsId,
                { productId: productId, quantity: 1 }
              ];
            }
      
            // Update cart (PATCH)
            await fetch(`http://localhost:3000/cart/${userId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ productsId: updatedProductsId }),
            });
      
            console.log('Cart updated successfully.');
      
          } else {
            // Cart doesn't exist: create a new cart (POST)
            const newCart = {
              id: userId,
              productsId: [
                {
                  productId: productId,
                  quantity: 1,
                }
              ]
            };
      
            await fetch(`http://localhost:3000/cart`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newCart),
            });
      
            console.log('New cart created successfully.');
          }
      
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      };
      
      
    const handleClick = (product) => {
        Swal.fire({
          title: `${product.name}`,
          text: `${product.description}`,
          imageUrl: product.image, // You can display the product image in the popup
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Product image',
          showCloseButton: true,
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Decline',
          confirmButtonColor: 'green',
          cancelButtonColor: 'red',
        //   width: '80%',
        }).then((result) => {
            if(result.isConfirmed){
                       addProductToCart(loggedInUser.id,product.id)
                Swal.fire({
                  title: 'Success',
                  text: 'Product added successfully',
                  icon: 'success',
                  confirmButtonColor: 'green'
                    })
            }
            // else if(result.isDismissed){
            //     Swal.fire({
            //         html:'<p class="fs-6 text-muted">Cancelled</p>'})
            // }
        })
      };
    const { product, fetchData } = useFetch();
    // const categories = Array.from(new Set(product.map(((d)=> d.category))))
    // const [ display, setdisplay ] = useState([])
    

  return (
    <div className="container py-5 ">
        <h1 className="mb-4 text-center fw-medium ">Our Products</h1>

    {/* diplay row per category from fetch */}
        {
                <div>                  
                    <div className="row gy-4 mt-4">
                        {
                           product.map((filtered,index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="card h-100 card-hover" onClick={() => handleClick(filtered)}>
                                        <img src={filtered.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Image" />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title fw-bold">{filtered.name}</h5>
                                            <p className="card-text text-truncate ">{filtered.description}</p>
                                            <p className="card-text fw-bold">Price:{filtered.price}</p>
                                            <button  className="btn btn-primary w-100">Add to Cart</button>
                                        </div>
                                    </div>
                              </div>
                            ))
                        }
                    </div>
                </div>
            
        }
    <style>
    {`.card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          }`}
    </style>
  </div>
  
  );
};

export default Products;