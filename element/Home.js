import React, { useState, useEffect } from 'react';
import './Home.css';
import {Link } from "react-router-dom";
import image from '../element/homePage.png'; // Ensure the path to the image is correct
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Home = () => {

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

 
  const handleStartQuiz = () => {
    // Retrieve isAuth value from local storage
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));

    if (isAuth === 1) {
        // If isAuthenticated, navigate to the quiz page
        navigate('/quiz');
    } else {
        // If not isAuthenticated, show an alert and navigate to signup page
        Swal.fire({
          icon: 'info',
          title: "User's Registration Required",
          text: 'Please sign up or log in to access the mock quiz.',
      }).then((result) => {
          if (result.isConfirmed || result.isDismissed) {
              navigate('/signup');
          }
      });
  }
};


  return (
    <div className="image-container">
      <img src={image} alt="Background" className="full-size-image" />
      <div className="text-overlay">
      <h1>Upcoming Hackathon by Enable IT</h1>
      {/* <p>Join us for an exciting hackathon where you'll collaborate with talented individuals to create innovative solutions. Compete for amazing prizes and network with industry professionals.</p> */}
      <p>Date: July 15-17, 2024</p>
      <p>Location: Nagpur, 440022</p>
      <p>For more details, visit our <Link to="https://enitsol.com/">Company Page</Link>.</p>
      <button className="mock-quiz-button" onClick={handleStartQuiz}>Start Mock Quiz</button>
      </div>
      
    </div>
  );
};

export default Home;
