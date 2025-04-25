import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;