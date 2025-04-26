import React from "react";
import { useFormik } from "formik";
import { useFetch } from "../components/ContextFetch";
import swal from 'sweetalert'; //alert pop up
import { Button } from "../components/Button";
import { usePost } from "../components/ContextPost";

function Product() {
    const { pProduct } = usePost();

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: "",
            brand :"",
            category: "",
            image: "",
            },
            onSubmit: values => {
                pProduct(values)
                swal("Data Submitted Successfully")
                formik.resetForm();
            }
    })
    
    return(
        <div className="container-product">
        <form onSubmit={formik.handleSubmit}>
            <input 
                type="text"
                name = "name"
                onChange={formik.handleChange}
                value= {formik.values.name}
                placeholder = "Enter product name"
                required
            />

            <input 
                type="text"
                name = "description"
                onChange={formik.handleChange}
                value= {formik.values.description}
                placeholder = "Enter product description"
                required
            />

            <input 
                type="number"
                name = "price"
                onChange={formik.handleChange}
                value= {formik.values.price}
                placeholder = "Enter product price"
                required
            />

            <input 
                type="text"
                name = "brand"
                onChange={formik.handleChange}
                value= {formik.values.brand}
                placeholder = "Enter product brand"
                required
            />

            <input 
                type="text"
                name = "image"
                onChange={formik.handleChange}
                value= {formik.values.image}
                placeholder = "Enter product image"
                required
            />

            <label>Product Category:</label>
           <select name="category" id="category" onChange={formik.handleChange} value={formik.values.category}>

                <option value="">Select category</option>
                <option value="Clothing & Fashion">🧥 Clothing & Fashion</option>
                <option value="Electronic & Gadgets">📱 Electronic & Gadgets</option>
                <option value="Home & Living">🏠 Home & Living</option>
                <option value="Kitchen and dining">🍽️ Kitchen and dining</option>
                <option value="Health & Beauty">🧴 Health & Beauty</option>
                <option value="Toy & Games">🧸 Toy & Games</option>
                <option value="Funiture & Decor">🛋️ Funiture & Decor</option>
                <option value="Books & Stationary">📚 Books & Stationary</option>
                <option value="Shoes & Accessories">👟 Shoes & Accessories</option>
                <option value="Travel & Outdoor gear">🧳 Travel & Outdoor gear</option>

           </select>

           <Button name="SUBMIT"/>

        </form>
        <style>
            {`
            .container-product {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
  }
  
  
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 400px;
    margin: 20px;
    padding: 20px;
    gap: 10px;
    color: #ffffff;
    background-color: #1e2a38;
  }
  
  input, select {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    background-color: #f2f4f8; 
    color: #000;
    box-sizing: border-box;
  }
  
  button {
    font-weight: bold;
    background-color: #3c6e71; 
    color: #fff;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  button:hover {
    background-color: #284b63; 
  }
            `}
        </style>
        </div>
    )
}
export default Product;