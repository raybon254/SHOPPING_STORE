import React from "react";
import { useFormik } from "formik";
import { useFetch } from "../components/ContextFetch";
import swal from 'sweetalert'; //alert pop up
import { Button } from "../components/Button";
import { usePost } from "../components/ContextPost";

function AddProduct() {
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
    
    return (
        <div className="container mt-5">
          <h2 className="text-center mb-4">Add New Product</h2>
          <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
            <form onSubmit={formik.handleSubmit}>
              
              <div className="mb-3">
                <input 
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="Enter product name"
                  required
                />
              </div>
      
              <div className="mb-3">
                <input 
                  type="text"
                  name="description"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  placeholder="Enter product description"
                  required
                />
              </div>
      
              <div className="mb-3">
                <input 
                  type="number"
                  name="price"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  placeholder="Enter product price"
                  required
                />
              </div>
      
              <div className="mb-3">
                <input 
                  type="text"
                  name="brand"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.brand}
                  placeholder="Enter product brand"
                  required
                />
              </div>
      
              <div className="mb-3">
                <input 
                  type="text"
                  name="image"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                  placeholder="Enter product image URL"
                  required
                />
              </div>
      
              <div className="mb-3">
                <label className="form-label">Product Category:</label>
                <select 
                  name="category" 
                  id="category" 
                  className="form-select"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  required
                >
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
              </div>
      
              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
              
            </form>
          </div>
        </div>
      );
      
}
export default AddProduct;