import React, { useState, useEffect } from 'react';
import { useUser, getUsers } from '../../pages/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import cartIcon from '../../assets/cart.png';
import Swal from 'sweetalert2';

const AdminLoginPage = () => {
  const { setLoggedInUser } = useUser();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = () => {
    const foundAdmin = users.find(
      (user) => user.id === adminId || user.name === adminId && user.password === password 
    );
    if (foundAdmin) {
      setLoggedInUser(foundAdmin);
      Swal.fire({
              title: "Success",
              text: "Login Successful",
              icon: "success",
              confirmButtonColor: "green"
            });
      navigate("/addproduct");
    } else {
      Swal.fire({
              title: "Failed",
              text: "Invalid Credential",
              icon: "error",
              confirmButtonColor: "red"
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
                      height="37"
                      className="d-inline-block align-top mx-2"
                      alt="logo"
                    />
                    <span className="fw-medium fs-4">
                      Shopping<span className="text-success mx-1">Store</span>
                    </span>
                  </h1>

      <div className="card p-4 shadow-sm mx-auto mb-3" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Admin Login</h2>
  
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
        />
  
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
  
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Admin Sign In
        </button>
      </div>
      <div className="d-flex justify-content-center mb-4">
              <Link to='/user-login'>
                <button className='btn btn-success w-20 mt-2 mx-4'>User Login</button>
              </Link>
            {/* Link to create an account */}
            <div className="text-center mt-3">
              <Link to='/create-user'>No account? Create one here</Link>
            </div>
            </div>
    </div>
  );
  
};

export default AdminLoginPage;
