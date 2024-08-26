// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials py-5">
      <div className="container-fluid">
        <h2 className="text-center mb-4">What Our Parents Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-item p-3 mb-4 bg-light">
                    <p>"Great school!"</p>
                    <p>- Parent 1</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item p-3 mb-4 bg-light">
                    <p>"Highly recommend."</p>
                    <p>- Parent 2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6">
                  <div className="testimonial-item p-3 mb-4 bg-light">
                    <p>"Amazing experience!"</p>
                    <p>- Parent 3</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="testimonial-item p-3 mb-4 bg-light">
                    <p>"Best decision for my child!"</p>
                    <p>- Parent 4</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more carousel items for more testimonials */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
