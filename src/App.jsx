import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/admin";
import './App.css';

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      
      {/* <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes> */}
    <Products />
    {/* < Product /> */}

      <Footer />
    </Router>
  );
};

export default App;
