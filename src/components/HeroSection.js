
import React from 'react';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="hero-section text-center text-white ">
      <div className="container-fluid d-flex row">
      <img src="./Images/logo 1.png" className="hero-logo" alt=''/>
        <img src="./Images/Group 26.png" alt="Hero" className="img-fluid" />
        <h1 className=' hero-text justify-content-center align-items-center'>Bringing <br />Excellence to Students</h1>
        <div className="row bg-green green-container">
          <div className="col-md-3 col-6">
            <p className='stat-number'>1400</p>
            <p className='stat-label text-white'>Students</p>
          </div>
          <div className="col-md-3 col-6">
            <p className='stat-number'>75</p>
            <p className='stat-label text-white'>Teachers</p>
          </div>
          <div className="col-md-3 col-6">
            <p className='stat-number'>40</p>
            <p className='stat-label text-white'>Classes</p>
          </div>
          <div className="col-md-3 col-6">
            <p className='stat-number'>10</p>
            <p className='stat-label text-white'>Labs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

