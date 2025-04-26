import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider, useUser } from "./pages/UserContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import routes from "./routes";
import UserLoginPage from "./pages/Login Pages/UserLoginPage";
import AdminLoginPage from "./pages/Login Pages/AdminLoginPage";
import CreateUserPage from "./pages/CreateUser";

const MainContent = () => {
  const { loggedInUser } = useUser();

  return (
    <Routes>
      {loggedInUser ? (
        // If logged in, show all the app routes
        <>
          {routes.map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}
        </>
      ) : (
        // If NOT logged in, ONLY allow login pages
        <>
          <Route path="/user-login" element={<UserLoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          {/* Any other path redirects to user-login */}
          <Route path="*" element={<Navigate to="/user-login" replace />} />
        </>
      )}
    </Routes>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <MainContent />
        <Footer />
      </Router>
    </UserProvider>
  );
};

export default App;
