import React from 'react';
import './App.css';
import Signin from './pages/users';
import Product from './pages/admin';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Signin />
      {/* <Product /> */}
      <Footer />
    </>
  );
}

export default App;
