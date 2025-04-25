import React, { createContext } from "react";
import { useContext, useState , useEffect, } from "react";
import swal from "sweetalert";

export const FetchContext = createContext();

// Data Fetch
export const Fetch = ({children}) => {

    const [ product, setproduct] = useState([])
    const [ isloading, setisloading] = useState(true)

    const fetchData = async() => {
         //fetch data
     try{
        const res = await fetch("http://localhost:3000/products");
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

useEffect(() => {
    fetchData();
}, [])
    if(isloading) return <p>Loading...</p>

    return(
        <FetchContext.Provider value={{ product }}>
            {children}
        </FetchContext.Provider>

    )

}

// Global fetchData 
export const useFetch = () => useContext(FetchContext)