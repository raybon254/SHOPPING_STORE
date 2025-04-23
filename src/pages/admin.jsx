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
        <div className="container">
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
                <option value="Attire">Attire</option>
                <option value="kitchen ware">kitchen ware</option>
                <option value="electronics">electronics</option>
                <option value="laundry">laundry</option>

           </select>

           <Button name="SUBMIT"/>

        </form>
        </div>
    )
}
export default Product;