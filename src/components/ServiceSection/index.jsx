import React from "react";
import { Link } from "react-router-dom";

import serviceImg1 from "../../img/service-bg-1.jpg";
import serviceImg2 from "../../img/service-bg-2.jpg";
import serviceImg3 from "../../img/service-bg-3.jpg";
import serviceIcon1 from "../../img/service-icon-1.png";
import serviceIcon2 from "../../img/service-icon-2.png";
import serviceIcon3 from "../../img/service-icon-3.png";

import "./style.css";

const ServiceSection = () => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-icon">
                <img src={serviceIcon1} alt="img" />
              </div>
              <div className="service-text">
                <h3>Shelving</h3>
                <p>
                  Custom shelving built with precise craftsmanship, durable
                  materials, and thoughtful design for a more organized,
                  beautiful home.
                </p>
                <Link to="/contact" className="cta-btn btn-border">
                  Contact
                </Link>
              </div>
              <img src={serviceImg1} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="service-icon">
                <img src={serviceIcon2} alt="img" />
              </div>
              <div className="service-text">
                <h3>Interior Remodeling</h3>
                <p>
                  Transform your living spaces with our expert interior remodeling services, combining functionality, style, and attention to detail for a home you'll love.
                </p>
                <Link to="/projects" className="cta-btn btn-border">
                  Gallery
                </Link>
              </div>
              <img src={serviceImg2} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="service-box"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-icon">
                <img src={serviceIcon3} alt="img" />
              </div>
              <div className="service-text">
                <h3>Exterior Remodeling</h3>
                <p>
                  Enhance your home's exterior with our professional remodeling services, focusing on curb appeal, durability, and modern design to create a welcoming and stylish exterior.
                </p>
                <Link to="/service-single" className="cta-btn btn-border">
                  Read More
                </Link>
              </div>
              <img src={serviceImg3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
