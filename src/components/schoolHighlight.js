import React from 'react';
import './schoolHighlight.css'
const schoolHighlight = () => {
    return (
        <body className="school-main-body">
        <link rel="stylesheet" href="styles.css"/>
        <div className="header">
            <h2>School Highlights</h2>
            <div className="school-content-left">
                <img src="./Images/Rectangle 84.png" className="header-image"/>

                <div className="school-text-container">
                    <img src="./Images/Full Gallary.png"/>

                </div>
                <div className="school-text-container-arrow">
                    <img src="./Images/Mask group (10).png"/>
                </div>

            </div>

            </div>
            <section className="school-main-section">
            <div className="school-content-left">
                <div className="school-events-grid">
                    <img src="./Images/IMG_3706 1.png" className="school-images-landscape"/>
                    <img src="./Images/DSC01471 1.png" className="school-images-portrait"/>

                </div>
                <div className="school-events-grid-bottom">
                    <img src="./Images/KUNA4739 1.png" className="school-images-portrait"/>
                    <img src="./Images/IMG_4138 1.png" className="school-images-landscape"/>
                </div>
            </div>
            <div className="school-content-right">
            <img src="./Images/Mask group (9).png" className="school-portrait-images"/>
                </div>
        </section>
        </body>
);
}
export default schoolHighlight;