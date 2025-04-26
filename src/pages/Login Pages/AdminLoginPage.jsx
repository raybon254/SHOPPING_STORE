import React, { useState, useEffect } from 'react';
import { useUser, getUsers } from '../../pages/UserContext';
import { Link, useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const { setLoggedInUser } = useUser();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);  // ✅ move this to top
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
  }, []);  // ✅ fetch users when page loads

  const handleLogin = () => {
    const foundAdmin = users.find(
      (user) => user.id === adminId && user.password === password && user.type === 'admin'
    );

    if (foundAdmin) {
      setLoggedInUser(foundAdmin);
      navigate("/");
    } else {
      alert('Invalid credentials for admin');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Shopping Store</h1>
      <Link to='/'>User Login</Link>
      <h2>Admin Login</h2>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <input
        className="form-control mb-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-danger" onClick={handleLogin}>Admin Sign In</button>
      
    </div>
  );
};

export default AdminLoginPage;
