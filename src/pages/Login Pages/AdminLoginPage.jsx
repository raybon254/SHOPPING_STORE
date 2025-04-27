import React, { useState, useEffect } from "react";
import { useUser, getUsers } from "../../pages/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/cart.png";
import Swal from "sweetalert2";

const AdminLoginPage = () => {
  const { setLoggedInUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    fetchUsers();
  }, []);
  console.log(users);

  const handleLogin = () => {
    const foundUser = users.find(
      (user) =>
        user.email === email &&
          user.password === password || user.name == email &&
          user.type === "admin") //added option for either email/name be used for login page
  
    if (foundUser) {
      setLoggedInUser(foundUser);
      Swal.fire({
        title: "Success",
        text: "Login Successful",
        icon: "success",
        confirmButtonColor: "green",
      });
      navigate("/create-product");
    } else {
      Swal.fire({
        title: "Failed",
        text: "Invalid Credential",
        icon: "error",
        confirmButtonColor: "red",
      });
    }
  };

  return (
    <div className="container mt-5 ">
       <h1 className="text-center mb-4 d-flex align-items-center justify-content-center">
                          {" "}
                          <img
                            src={cartIcon}
                            width="32"
                            height="37"
                            className="d-inline-block align-top mx-2"
                            alt="logo"
                          />
                          <span className="fw-bold ">
                            Shopping<span className="text-success mx-1">Store</span>
                          </span>
                        </h1>
     
      {/* User Login Card */}
      <div
        className="card p-4 shadow-sm mx-auto mb-3"
        style={{ maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Admin Login</h2>

        {/* Email Input */}
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter name or email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Sign In Button */}
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Sign In
        </button>
      </div>

      {/* Admin Login Button */}
      <div className="d-flex justify-content-center mb-4">
        <Link to="/user-login">
          <button className="btn btn-success w-20 mt-2 mx-4">
            User Login
          </button>
        </Link>
        {/* Link to create an account */}
        <div className="text-center mt-3">
          <Link to="/create-user">No account? Create one here</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
