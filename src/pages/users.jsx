import React from "react";
import { useFormik } from "formik";
import swal from "sweetalert";

function Signin(){
     const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },

        onSubmit: values => {
            swal("Registered successfully")
            formik.resetForm();
        }
     })

     return (
        <div className="container">
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

            <button type="submit">SUBMIT</button>
        </form>
        </div>
     )
}
export default Signin;