import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';
// import { useHistory } from 'react-router-dom';


const Navbar = ({ userName, userAvatar }) => {

 

  const [darkMode, setDarkMode] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);


  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing auth tokens)
    localStorage.removeItem('signUpData');
    localStorage.removeItem('isAuth');
    // Redirect to the signup page
    window.location.href = '/signup';
  };


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    // Retrieve the sign-up data from local storage on component mount
    const data = localStorage.getItem('signUpData');
    if (data) {
      const parsedData = JSON.parse(data);
      console.log("Full Name from Local Storage:", parsedData.fullName);
      setLoggedInUser(parsedData.fullName);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">Enable IT</Link>
        <Link to="/home">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="navbar-right">
      {userName && (
        <div className="navbar-user">
          <span className="navbar-user-name">{userName}</span>
          <img src={userAvatar} alt="User Avatar" className="navbar-user-avatar" />
        </div>
      )}
      <h4>{loggedInUser}</h4>

      <Link onClick={handleLogout} to="/signup">Logout</Link>
    
        <Link to="/Login"><i className="fas fa-sign-in-alt"></i> Login</Link>
        <Link to="/Signup"><i className="fas fa-user-plus"></i> Signup</Link>
        
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}


export default Navbar;