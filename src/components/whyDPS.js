/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './whyDPS.css'
const whyDPS = () => {
  return (
      <body background="./Images/Group 28.png" className='image-fluid'>
      <link rel="stylesheet" href="styles.css"/>
      <section className="why-main-section">
        <div className="why-content-left">
          <img src="./Images/Group 27.png" className="why-images"/>
          <div className="text-container">
            <h2 >Why DPS?</h2>
          </div>

        </div>
        <div className="why-content-right">
          <div className="why-events-grid">
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group.png" className="mask"/>
              </div>
              <small>Established in April 2007</small></div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (1).png" className="mask"/>
              </div>
              <small>Student Teachers Ratio 1:15</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (2).png" className="mask"/>
              </div>
              <small>Ist to XIIth CBSE Curriculum Offered</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (3).png" className="mask"/>
              </div>
              <small>200+ In house staff</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (4).png" className="mask"/>
              </div>
              <small>Situated in Yamuna Nagar, Haryana</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (5).png" className="mask"/>
              </div>
              <small>Spread Across an Area of 17 Acres</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (6).png" className="mask"/>
              </div>
              <small>ATAL Tinkering Lab Robotics Lab</small>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (7).png" className="mask"/>
              </div>
              <small>Co-ed Boarding School(Abode of Bliss) For classes IIIrd to XIIth</small>
            </div>
          </div>
        </div>
      </section>
      </body>
  );
}
export default whyDPS;