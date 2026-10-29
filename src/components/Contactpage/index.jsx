import React from "react";
import ContactForm from "../ContactFrom";
import "./style.css";

const Contactpage = () => {
  return (
    <section className="contact-page-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="contact-form">
              <div className="site-heading" data-aos="fade-up">
                <h3 className="sub-title">Get Quote</h3>
                <h2 className="section-title">Free Consultation</h2>
              </div>
              <ContactForm />
            </div>
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="contact-page-left">
              <h3>Contact info</h3>
              <div className="contact-info">
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-map-marker-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Head office</h5>
                    <p>
                      Salt Lake City,
                      <br />
                      Utah.
                    </p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-phone-alt" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Phone</h5>
                    <p>(801) 999 3333</p>
                  </div>
                </div>
                <div className="single-contact-info" data-aos="fade-up">
                  <div className="contact-info-icon">
                    <span className="fas fa-envelope" />
                  </div>
                  <div className="contact-info-text">
                    <h5>Email</h5>
                    <p>wasatchcustombasement@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-6">
            <div className="contact-page-right">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96682.17964872815!2d-112.00350676425455!3d40.777020069525555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87523d9488d131ed%3A0x5b53b7a0484d31ca!2sSalt%20Lake%20City%2C%20UT!5e0!3m2!1sen!2sus!4v1793249656349!5m2!1sen!2sus"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
