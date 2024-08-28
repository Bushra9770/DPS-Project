/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './beyondClassroom.css';

const beyondClassroom = () => {
  return (
    <div className="beyond-classroom">
      <section className="beyond-section text-center">
        <h2 className='mb-3'>Beyond The Classroom</h2>
        <Carousel className="beyond-container">
          <Carousel.Item>
            <div className="beyond">
              <img src="./Images/Rectangle 34.png" className="d-block w-100 beyond-image" />
              <h3 className="textPadding mt-3">Academics</h3>
              <p className="textPadding">JOIN US TO ENTHUSE, EMPOWER AND EXCEL YOUR WARD</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="beyond">
              <img src="./Images/Rectangle 35.png" className="d-block w-100 beyond-image" />
              <h3 className="textPadding mt-3">Infrastructure</h3>
              <p className="textPadding">17 ACRES ECO-FRIENDLY CAMPUS</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="beyond">
              <img src="./Images/Rectangle 36.png" className="d-block w-100 beyond-image" />
              <h3 className="textPadding mt-3">Sports</h3>
              <p className="textPadding">PASSION FIRST AND EVERYTHING WILL COME INTO PLACE</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="beyond">
              <img src="./Images/Rectangle 37.png" className="d-block w-100 beyond-image" />
              <h3 className="textPadding mt-3">Pastoral Care</h3>
              <p className="textPadding">WHERE CARING IS NOT JUST A DUTY BUT CULTURE</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}

export default beyondClassroom;
