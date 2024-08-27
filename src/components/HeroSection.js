// /* eslint-disable jsx-a11y/alt-text */
// // src/components/HeroSection.js
// import React from 'react';
// import './HeroSection.css'
// const HeroSection = () => {
//   return (
//       <body>
//       <div className="header-section">
//           <div className="hero-text">
//               <h1>Bringing</h1>
//               <h1>Excellence to Students</h1>
//           </div>
//           <img src="./Images/logo 1.png" className="hero-logo"/>
// <img src = "./Images/Group 26.png" className="hero-header-image"/>
//       </div>
//       <footer className="hero-footer-container">
//           <div className="hero-footer-section">
//               <p className="hero-numbers">1400</p>
//               <p>______</p>
//               <p>STUDENTS</p>
//           </div>
//           <div className="hero-footer-section">
//               <div className="hero-numbers">75</div>
//               <p>____</p>
//               <div>TEACHERS</div>
//           </div>
//           <div className="hero-footer-section">
//               <div className="hero-numbers">40</div>
//               <p>____</p>
//               <div>CLASSES</div>
//           </div>
//           <div className="hero-footer-section">
//               <div className="hero-numbers">10</div>
//               <p>____</p>
//               <div>LABS</div>
//           </div>
//       </footer>
//       </body>
//   );
// };

// export default HeroSection;
// src/components/HeroSection.js

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

