import React from "react";
import {  useFetch } from "../components/ContextFetch";
import Swal from "sweetalert2";
// import { set } from "date-fns";
// import { useState } from "react";

const Products = () => {

    
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
          confirmButtonText: 'CONFIRM',
          cancelButtonText: 'DECLINE',
          confirmButtonColor: '#3085d6',
        //   width: '80%',
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire({
                    html:'<p class="fs-6 text-muted">Successfully added to cart</p>'})
            }
            // else if(result.isDismissed){
            //     Swal.fire({
            //         html:'<p class="fs-6 text-muted">Cancelled</p>'})
            // }
        })
      };
    const { product } = useFetch();
    // const [ display, setdisplay ] = useState([])
    

  return (
    <div className="container py-5 ">
        <h1 className="mb-4 text-center display-3 fw-medium">Our Products</h1>

    {/* diplay row per category from fetch */}
        {
                <div>                  
                    <div className="row gy-4">
                        {
                           product.map((filtered,index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="card h-100 card-hover" onClick={() => handleClick(filtered)}>
                                        <img src={filtered.image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="Image" />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title fw-bold">{filtered.name}</h5>
                                            <p className="card-text text-truncate ">{filtered.description}</p>
                                            <p className="card-text fw-bold">Price:{filtered.price}</p>
                                            <button className="btn btn-primary w-100  mt-auto">Add to Cart</button>
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
            // background-color: silver;
          }`}
    </style>
  </div>
  
  );
};

export default Products;