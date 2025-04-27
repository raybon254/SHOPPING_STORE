import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cartIcon from "../assets/cart.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CreateUserPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("user"); // default to "user"
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      // First, fetch existing users
      const usersResponse = await fetch("https://json-server-1-c3fk.onrender.com/users");
      const existingUsers = await usersResponse.json();

      // Check if email already exists
      const emailExists = existingUsers.some((user) => user.email === email);
      if (emailExists) {
        Swal.fire({
          title: "Email already exists",
          text: "Please use a different Email",
          icon: "warning",
          confirmButtonColor: "red",
        });
        return;
      }

      // If email is unique, create the new user
      const newUser = {
        name: name,
        email: email,
        password: password,
        type: type,
      };

      const createResponse = await fetch("https://json-server-1-c3fk.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!createResponse.ok) {
        throw new Error("Failed to create user");
      }

      Swal.fire("Success", "User created successfully!", "success");
      navigate("/user-login"); // navigate sign in
    } catch (error) {
      console.error("Error creating user:", error);
      Swal.fire({
        title: "Ooops..",
        text: "Something went wrong!",
        icon: "Warning",
      });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 d-flex align-items-center justify-content-center">
        {" "}
        <img
          src={cartIcon}
          width="32"
          height="32"
          className="d-inline-block align-top mx-2"
          alt="logo"
        />
        <span className="fw-medium fw-bold">
          Shopping<span className="text-success mx-1">Store</span>
        </span>
      </h1>
      <div className="card p-4 shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
        <h1 className="text-center mb-4">Create New User</h1>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {/* <select
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select> */}
        </div>
        <button className="btn btn-primary" onClick={handleCreateUser}>
          Create User
        </button>
      </div>
      {/* Link to create an account */}
      <div className="text-center mt-3">
        <Link to="/user-login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default CreateUserPage;
