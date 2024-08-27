/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './whyDPS.css'
const whyDPS = () => {
  return (
      <body background="./Images/Group 28.png" className='image-fluid'>
      <link rel="stylesheet" href="styles.css"/>
      <section className="why-main-section common-section-padding">
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
              <p>Established in April 2007</p></div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (1).png" className="mask"/>
              </div>
              <p>Student Teachers Ratio 1:15</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (2).png" className="mask"/>
              </div>
              <p>Ist to XIIth CBSE Curriculum Offered</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (3).png" className="mask"/>
              </div>
              <p>200+ In house staff</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (4).png" className="mask"/>
              </div>
              <p>Situated in Yamuna Nagar, Haryana</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (5).png" className="mask"/>
              </div>
              <p>Spread Across an Area of 17 Acres</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (6).png" className="mask"/>
              </div>
              <p>ATAL Tinkering Lab Robotics Lab</p>
            </div>
            <div className="why-event-card">
              <div className="mask_image">
                <img src="./Images/Mask group (7).png" className="mask"/>
              </div>
              <p>Co-ed Boarding School(Abode of Bliss) For classes IIIrd to XIIth</p>
            </div>
          </div>
        </div>
      </section>
      </body>
  );
}
export default whyDPS;