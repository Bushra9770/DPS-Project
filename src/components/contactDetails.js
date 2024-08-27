/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './contactDetails.css'
const contactDetails = () => {
    return (

        <footer>
            <link rel="stylesheet" href="styles.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <div className="footer-container">
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul className="custom-bullet-list">
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Admissions</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Hostel Facilities</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Jobs and Careers</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">CBSE Mandatory Disclosure</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Alumni Portal</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Privacy Policy</a></li>
                        <li><a href="https://github.com/Lokesh9756?tab=repositories">Reach Us</a></li>
                    </ul>
                </div>
                <div className="footer-section about">

                    <img src="./Images/image 8.png" alt="DPS Logo" className="footer-logo"/>
                    <p className='extra-padding'>
                        Delhi Public School Yamunanagar under the aegis of Delhi Public School Society, Delhi believes
                        that quality education is about possibilities. We at DPS-YNR view education as a process which
                        takes along students, educators and parents on an inviting journey - exploring the worlds of
                        intellectual, emotional and spiritual learning.
                    </p>
                    <div className="social-icons">
                        <a><i className="fab fa-facebook-f"></i></a>
                        <a><i className="fab fa-instagram"></i></a>
                        <a><i className="fab fa-youtube"></i></a>
                        <a><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="footer-section contact-us">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Delhi Public School Yamuna Nagar, Vill. Bhambholi, 9 Km
                        Milestone, Jagadhri – Ambala Road, Opposite Power Grid Station Jagadhri, District Yamuna Nagar,
                        Pin – 133103 Haryana (INDIA)</p>
                    <p><i className="fas fa-envelope"></i> info@dpsyamunanagar.com</p>
                    <p><i className="fas fa-phone"></i> 1800-8911-007</p>
                    <p><i className="fas fa-globe"></i> www.dpsyamunanagar.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024-2025 Delhi Public School, Yamuna Nagar.</p>
            </div>
        </footer>
    );
};
export default contactDetails;