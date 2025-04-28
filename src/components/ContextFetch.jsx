import React, { createContext } from "react";
import { useContext, useState , useEffect, } from "react";
import swal from "sweetalert";
import cartIcon from "../assets/cart.png";
export const FetchContext = createContext();

// Data Fetch products
export const Fetch = ({children}) => {

    const [ product, setproduct] = useState([])
    const [ Users, setUsers] = useState([])
    const [ isloading, setisloading] = useState(true)

    const fetchData = async() => {
         //fetch data
     try{
        const res = await fetch("https://json-server-1-c3fk.onrender.com/products");
        const data = await res.json();
            setproduct(data);
    }
    catch(error){
        swal("Error fetching data", error.message)
    }
    finally{
        setisloading(false)
    }
};

// Data Fetch users
const fetchUsers = async() => {
    //fetch data
try{
   const res = await fetch("https://json-server-1-c3fk.onrender.com/users");
   const user = await res.json();
       setUsers(user);
}
catch(error){
   swal("Error fetching users", error.message)
}
finally{
   setisloading(false)
}
};

useEffect(() => {
    fetchData();
    fetchUsers();
}, []);

if (isloading) return (
   
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#d4edda' }}>
     
      <img
        src={cartIcon}
        width="42"
        height="42"
        className="d-inline-block align-top me-2"
        alt="Cart Logo"
      />
     
    </div>
  );
  
    return(
        <FetchContext.Provider value={{ product,setproduct, Users, fetchData}}>
            {children}
        </FetchContext.Provider>

    )

}

// Global fetchData 
export const useFetch = () => useContext(FetchContext)