/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./yamunaNagarSection.css";
import "./welcomeDPS.css";

const yamunaSection = () => {
    return (
        <div className="yamuna-section d-flex container-fluid flex-wrap">
            <div className="about-yamuna container-fluid d-flex text-black text-section col d-flex flex-column ">
                <h2 className="pb-2">
                    DPS, Yamuna Nagar
                    <span className="font-32">
            The Best CBSE Boarding School in North India
          </span>
                </h2>
                <p className="pb-3">
                    The environment at DPS Yamuna Nagar, one of the best boarding schools
                    in Haryana, is highly nurturing, caring and aims towards providing
                    every child with the opportunities to develop their talents as well as
                    achieve their full academic potential. Our objective at the day
                    boarding school is to make students’ life fun, safe, and rewarding,
                    and help them achieve independence and maturity. We take great pride
                    in providing the best amenities to all our students. We focus on every
                    element required for the holistic growth of our wards.
                </p>
                <p className="pb-3">
                    Teachers at the day boarding school in Yamuna Nagar take 100%
                    responsibility for the holistic development of children. Our landmark
                    day boarding school provides unmatched ambiance and a highly motiving
                    learning environment to the students. Besides providing high-quality
                    education, we focus on the overall growth and development of the
                    students. Students from different backgrounds and cultures come
                    together and thrive as their differences are embraced and celebrated
                    by our vibrant community of boarders. The school offers boarding
                    facilities to students from multiple nationalities, making it one of
                    the best residential schools in India.<a href="#" className="read-more">Read More</a>
                </p>
            </div>
            <div className="image-section d-flex position-relative">
                <div className="yellow-box position-absolute"></div>
                <div className="green-box position-absolute bottom-0 end-0"></div>
                <div className="image-wrapper position-relative justify-content-center">
                    <img
                        src="/Images/Group 29.png"
                        alt="DPS Yamuna Nagar"
                        className="img-fluid rounded"
                    />
                    {/* <div className="yellow-box position-absolute top-0 start-0 bg-warning rounded"></div> */}
                    {/* <div className="green-box position-absolute bottom-0 end-0 bg-success rounded"></div> */}
                </div>
            </div>
        </div>
    );
};

export default yamunaSection;