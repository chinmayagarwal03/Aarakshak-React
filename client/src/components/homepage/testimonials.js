import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/images/uncle1.jfif";
import image2 from "../../assets/images/uncle2.jfif";
import image3 from "../../assets/images/9.jpg";
import image4 from "../../assets/images/maam.jpg";

import "../../assets/css/testimonials.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="testimonial-section">
      <div className="about-testimonial">
        <div data-aos="zoom-in-right" className="testimonial-text col-sm-3">
        <div className="testimonial-content">
          <p>
            <i class="fa-solid fa-quote-left fa-2x"></i>&nbsp;A truly game-changing
            solution which helps real-time tracking ensures officer's safety &
            enhance operational tracking efficiency.
            <i class="fa-solid fa-quote-right fa-2x icon-right-testimonial"></i>
          </p>
          </div>
          <div className="testimonial-details">
            <img src={image2} />
            <div className="testimonial-designation">
              <span>Naresh Kumar</span>
              <span>DSP, Noida</span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" className="testimonial-text col-sm-3">
          <div className="testimonial-content">
            <p>
              <i class="fa-solid fa-quote-left fa-2x"></i>&nbsp;Aarakshak enables our 
              police force to operate with remarkable precision and leveraging real-time
              officer allocation.
              <i class="fa-solid fa-quote-right icon-right-testimonial fa-2x"></i>
            </p>
          </div>
          <div className="testimonial-details">
            <img src={image4} />
            <div className="testimonial-designation">
              <span>Rinkle Rani</span>
              <span>DGP, Delhi Central</span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" className="testimonial-text col-sm-3">
        <div className="testimonial-content">
          <p className="p1">
            <i class="fa-solid fa-quote-left fa-2x"></i>
            &nbsp;Aarakshak boosts accountability and streamlines process of police onboarding, helping
            in transform police management
            <i class="fa-solid fa-quote-right icon-right-testimonial fa-2x"></i>
          </p>
          </div>
          <div className="testimonial-details">
            <img src={image1} />
            <div className="testimonial-designation">
              <span>Ramesh Sharma</span>
              <span>DCP, Bareilly</span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-left" className="testimonial-text col-sm-3">
        <div className="testimonial-content">
          <p>
            <i class="fa-solid fa-quote-left fa-2x"></i>
            &nbsp;Aarakshak greatly boosts emergency response with reliability. It is user
            friendly, easy to use & created vital operational impact
            <i class="fa-solid fa-quote-right icon-right-testimonial fa-2x"></i>
          </p>
          </div>
          <div className="testimonial-details">
            <img src={image3} />
            <div className="testimonial-designation">
              <span>Pankaj Rathore</span>
              <span>DGP, Noida</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
