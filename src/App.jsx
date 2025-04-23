import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default App;