import React, { useState,useEffect } from 'react';
import { useUser, getUsers } from '../../pages/UserContext';
import { useNavigate } from  "react-router-dom";
import { Link } from 'react-router-dom';
const UserLoginPage = () => {
  const { setLoggedInUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users,setUsers]=useState([])
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
console.log(users)
  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password && user.type === 'user'
    );
    if (foundUser) {
      setLoggedInUser(foundUser);
      navigate('/')
    } else {
      alert('Invalid credentials for user');
    }
  };

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Welcome to Shopping Store</h1>
  <Link to ='/admin-login'>Admin Login</Link>
    <div className="card p-4 shadow-sm">
      <h2 className="text-center mb-4">User Login</h2>
  
      <input 
        className="form-control mb-3" 
        type="email" 
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
  
      <input 
        className="form-control mb-3" 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      />
  
      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Sign In
      </button>

    </div>
    
    <Link to='/create-user'>No account, create one here</Link>
  </div>
  
  );
};

export default UserLoginPage;
