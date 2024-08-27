/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HighlightSecssion.css';

const HighlightSecssion = () => {
    return (
        <div className="container-fluid highlight-main-body common-section-padding ">
            <div className="row justify-content-between align-items-center mb-4">
                <div className="col-auto">
                    <h2 className="school-title">School Highlights</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-success school-full-gallery-btn">Full Gallery &gt;</button>
                </div>
            </div>

            <div className="row g-3 container-gap">
                <div className="col-lg-6 col-md-12">
                    <img src="./Images/IMG_3706 1.png" className="img-fluid rounded school-main-image"/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src="./Images/DSC01471 1.png" className="img-fluid rounded school-side-image"/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src="./Images/Mask group (9).png" className="img-fluid rounded school-side-image"/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src="./Images/IMG_4138 1.png" className="img-fluid rounded school-side-image"/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <img src="./Images/KUNA4739 1.png" className="img-fluid rounded school-side-image"/>
                </div>
                
            </div>
            <div className="col-lg-3 col-md-6 col-12 display-modify">
                    <img src="./Images/Mask group (9).png" className="img-fluid rounded school-side-image"/>
                </div>
            </div>
    );
}

export default HighlightSecssion;
