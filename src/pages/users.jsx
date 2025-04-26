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
        </div>
     )
}
export default Signin;