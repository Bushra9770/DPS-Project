/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./welcomeDPS.css";
const WelcomeDPS = () => {
    return (
        <div className="welcome-section d-flex col container-fluid">
            <div className="about-welcome container-fluid d-flex row text-black">
                <h2  className="pb-2">Welcome To DPS Yamuna Nagar:<span>The Best CBSE School In Haryana</span></h2>
                <p className="pb-3">
                    Delhi Public School Yamuna Nagar, under the aegis of Delhi Public
                    School Society, Delhi offers an inspiring, enriching, and inclusive
                    academic environment to the students. As a school with a global
                    perspective, we believe in honing the natural intellect, individual
                    excellence, and the capacity for interdisciplinary collaboration in
                    our students. We guide our learners to become confident and meticulous
                    citizen-leaders, and encourage them to pursue their passion for growth
                    in life. The school inspires and equips them to be risk-takers and
                    explore new horizons. We pride ourselves on being one of the top CBSE
                    schools in Yamuna Nagar, providing unique all-round education to our
                    wards.
                </p>
                <p  className="pb-3">
                    The school inculcates innovation and creativity in the students
                    through holistic learning in state-of-the-art classrooms and labs. The
                    sports academy is equipped with world-class infrastructure for
                    multiple indoor and outdoor games. The students are trained under the
                    guidance of national and international level coaches. We recognize
                    that the knowledge, skills, and experience of our faculty members are
                    significant for achieving our commitment to excellence. In our
                    endeavor to provide the best educators and staff, we offer an
                    outstanding work environment with excellent facilities that are as
                    conducive for the staff as they are for the students by following
                    valuable guidelines from the DPS Society.<a href="#" className="read-more">Read More</a>
                </p>
            </div>
            <div className="image-rectangle">
                <div className="image-layout">
                    <img
                        src="/Images/image 4.png"
                        alt="Welcome DSP"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};

export default WelcomeDPS;
