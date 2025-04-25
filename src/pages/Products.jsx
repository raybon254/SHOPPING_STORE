    import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useFetch } from "../components/ContextFetch";
import Swal from "sweetalert2";
import { set } from "date-fns";
// import { useState } from "react";

const Products = () => {

    
    const handleClick = (product) => {
        Swal.fire({
          title: `${product.name}`,
          text: `${product.description}`,
          imageUrl: product.image, // You can display the product image in the popup
          imageWidth: 600,
          imageHeight: 450,
          imageAlt: 'Product image',
          confirmButtonText: 'Add to Cart',
          confirmButtonColor: '#3085d6',
          cancelButtonText: 'Close',
          cancelButtonColor: '#d33',
          width: '80%',
          heightAuto: false,
        });
      };
    const { product } = useFetch();
    const categories = Array.from(new Set(product.map(((d)=> d.category))))
    // const [ display, setdisplay ] = useState([])
    

  return (
    <div className="container py-5">
        <h1 className="mb-4 text-center display-3 fw-bold">Our Products</h1>

    {/* diplay row per category from fetch */}
        {
            categories.map((cat, index)=> (
                <div>
                    <h1 className="mb-4 text-center display-8 fw-bold" key={index}>{cat}</h1>

                   
                    <div className="row gy-4">
                        {
                            product.filter((p) => p.category === cat ).map((filtered,index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="card h-100" onClick={() => handleClick(filtered)}>
                                        <img src={filtered.image} className="card-img-top" alt="Image" />
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{filtered.name}</h5>
                                            <p className="card-text">{filtered.description}</p>
                                            <p className="card-text fw-bold">Price:{filtered.price}</p>
                                            <button className="btn btn-primary w-100">Add to Cart</button>
                                        </div>
                                    </div>
                              </div>
                            ))
                        }
                    </div>
                </div>
                ))
            
        }

  </div>
  );
};

export default Products;