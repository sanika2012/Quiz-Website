// src/Login.js

import React, { useEffect, useState } from 'react';
import './Login.css';
// import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  // const { setIsAuthenticated } = useAuth();
  // const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('signUpData'));
    if (storedData) {
      setUsername(storedData.username);
    }
  }, []);



  let user;
  let pass;
  const data = localStorage.getItem("signUpData");
  console.log("This is data",data);
  const parsedData = JSON.parse(data);
   user = parsedData.username;
   pass = parsedData.password;

   
  const handleLogin = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('signUpData'));
     
    if (username === user && password === pass){
     
  
      console.log('Login successful');
      // Clear the form fields
      setUsername('');
      setPassword('');
      setError('');

      localStorage.setItem('isAuth', JSON.stringify(1));
      
       // Redirect to home page
      window.location.href = '/home'; // Redirect to front page
    } else {
      // Invalid username or password
      setError('Username or password is incorrect');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">
            Username: <span className="required">*</span>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password: <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
