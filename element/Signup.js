// src/SignUp.js

import React, { useState, useEffect } from 'react';
import './Signup.css';
// import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {

  // const { setIsAuthenticated } = useAuth();
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    university: '',
    members: '',
    email: '',
    username: '',
    password: '',
    contactNo: ''
  });

  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Retrieve the sign-up data from local storage on component mount
    const data = localStorage.getItem('signUpData');
    if (data) {
      setStoredData(JSON.parse(data));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form data in local storage
    localStorage.setItem('signUpData', JSON.stringify(formData));
 
    // Clear form fields
    setFormData({
      fullName: '',
      university: '',
      members: '',
      email: '',
      username: '',
      password: '',
      contactNo: ''
    });
    // Update storedData state
    setStoredData(formData);
    window.location.href = '/login'; 
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="university">
              University/Institute
            </label>
            <input
              type="text"
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter your university/institute"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="members">
              Number of Members in Your Group
            </label>
            <select
              id="members"
              name="members"
              value={formData.members}
              onChange={handleChange}
            >
              <option value="">Select number of members</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="username">
              Username<span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password<span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a password"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">
            Contact No.
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      
    </div>
  );
};

export default SignUp;
