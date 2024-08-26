// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
      <body>
      <div className="header-section">
          <div className="hero-text">
              <h1>Bringing</h1>
              <h1>Excellence to Students</h1>
          </div>
          <img src="./Images/logo 1.png" className="hero-logo"/>
<img src = "./Images/Group 26.png" className="hero-header-image"/>
      </div>
      <footer className="hero-footer-container">
          <div className="hero-footer-section">
              <p className="hero-numbers">1400</p>
              <p>______</p>
              <p>STUDENTS</p>
          </div>
          <div className="hero-footer-section">
              <div className="hero-numbers">75</div>
              <p>____</p>
              <div>TEACHERS</div>
          </div>
          <div className="hero-footer-section">
              <div className="hero-numbers">40</div>
              <p>____</p>
              <div>CLASSES</div>
          </div>
          <div className="hero-footer-section">
              <div className="hero-numbers">10</div>
              <p>____</p>
              <div>LABS</div>
          </div>
      </footer>
      </body>
  );
};

export default HeroSection;
