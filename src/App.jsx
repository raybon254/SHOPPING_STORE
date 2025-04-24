import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './Pages/About';

function App() {
  

  return (
    <>
      <NavBar/>
      {/* Page Content will go here */
      <About/>
      }
      <Footer/>
    </>
  )
}

export default App
