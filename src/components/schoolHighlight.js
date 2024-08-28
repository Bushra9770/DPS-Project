/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./schoolHighlight.css";
const schoolHighlight = () => {
  return (
    <body className="school-main-body">
      <div className="header">
        <h2>School Highlights</h2>
        <div className="col-auto">
                    <button className="btn btn-success school-full-gallery-btn">Full Gallery &gt;</button>
                </div>
      </div>
      <section className="school-main-section">
        <div className="school-content-left">
          <div className="school-events-grid">
            <img
              src="./Images/IMG_3706 1.png"
              className="school-images-landscape  col-md-12 coloum-images"
            />
            <div className="coloum-images">
              <img
                src="./Images/DSC01471 1.png"
                className="school-images-portrait"
              />
            </div>
          </div>
          <div className="school-events-grid-bottom ">
            <img
              src="./Images/KUNA4739 1.png"
              className="school-images-portrait  col-md-12 coloum-images"
            />
            <img
              src="./Images/IMG_4138 1.png"
              className="school-images-landscape  col-md-12"
            />
          </div>
        </div>
        <div className="school-content-right">
          <img
            src="./Images/Mask group (9).png"
            className="school-portrait-images  col-md-12"
          />
        </div>
      </section>
    </body>
  );
};
export default schoolHighlight;
