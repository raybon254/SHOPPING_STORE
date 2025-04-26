import React from "react";
import { useFormik } from "formik";
import { usePost } from "../components/ContextPost";
import swal from "sweetalert";
import { Button } from "../components/Button";

function Signin(){

    const { pData, postload} = usePost();
    console.log(pData)
     const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        onSubmit: values => {
            pData(values)
            swal("Registered successfully")
            formik.resetForm();
        }
        
     })

     return (
        <div className="container-product">
        {postload && <p className="loading-text">Submitting, please wait...</p>}

        <form onSubmit={formik.handleSubmit}>

            <input 
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter your name"
            required
            />

            <input 
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Enter your email"
            required
            />

            <input 
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Enter your password"
            required
            />

            <Button name ="SUBMIT"/>  
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
export default Signin;