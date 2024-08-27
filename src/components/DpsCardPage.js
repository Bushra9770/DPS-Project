import React from "react";
import "./DpsCardPage.css"; // Custom CSS for specific styling

const DpsCardPage = () => {
  return (
    <div className="DpsCardpage-session container-fluid d-flex row common-section-padding">
      <h2 className="text-center mb-4">
        DPS - Where Education Meets Inspiration
      </h2>
      <div className="d-flex card-container col">
        <div className="col-md-4 col-20 col-sm-12">
          <div className=" card  text-white">
            <img
              src="./Images/Rectangle 58.png"
              alt="Our Vision"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Our mission</h5>
              <p className="card-text">
                We aim towards being a center of excellence in education by
                educating our privileged youth in the essence of enlightened
                leadership and citizenship.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-20 col-sm-12">
          <div className="card text-white">
            <img
              src="./Images/Rectangle 59.png"
              alt="Our Vision"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Our vision</h5>
              <p className="card-text">
              We aim towards being a center of excellence in education by
                educating our privileged youth in the essence of enlightened
                leadership and citizenship.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xl-6 col-20 col-sm-12">
          <div className="card text-white ">
            <img
              src="./Images/Rectangle 60.png"
              alt="Our Values"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Our values</h5>
              <p className="card-text">
              We aim towards being a center of excellence in education by
                educating our privileged youth in the essence of enlightened
                leadership and citizenship.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-4 col-md-6 col-sm-12">
          <p className="text-width">
            DPS, Yamuna Nagar is deeply committed towards holistic education of
            the learners. Our focus not only in the development educational
            skills of the students but also their non-cognitive skills. The team
            at DPS, Yamuna Nagar comprises of well-qualified and experienced
            teachers and instructors supported by experienced administrative
            staff members. The school campus houses a well-equipped and
            technologically advanced academic wing, boarding houses, amply
            equipped sports amenities, medical facilities and state-of-the-art
            labs, spread over acres of campus, which are well-planned and
            constructed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DpsCardPage;
