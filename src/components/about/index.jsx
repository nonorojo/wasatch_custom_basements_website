import React from "react";
import CountUp from "react-countup";

import bg from "../../img/about-bg.png";
import img1 from "../../img/about-1.jpg";
import img2 from "../../img/about-2.jpg";
import signature from "../../img/signature.jpg";

import "./style.css";

const About = () => {
  return (
    <section className="about-area" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-left" data-aos="fade-right">
              <div className="about-panel">
                <div className="site-heading">
                  <h3 className="sub-title">ABOUT US</h3>
                  <h2 className="section-title">
                    Affordable and high-quality craftsmanship
                  </h2>
                </div>
                <p>
                  Two Hispanic brothers started Wasatch Custom Basements with one goal in mind: to build a better life for their families while helping others love their homes again. What began as a small dream has grown into a trusted remodeling team serving Salt Lake City with pride, integrity, and hard work.
                </p>
                <p>
                  We specialize in transforming basements and living spaces to match your vision—beautiful, functional, and built to last. Our mission is simple: deliver high‑quality craftsmanship at an affordable price, so every family can enjoy a home they’re proud of.
                </p>
              <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3>Nathan & Eliu Flores</h3>
                  <p>Business Owners</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="about-counter">
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={5} duration={5} />
                  </span>
                </h2>
                <p>
                  Years of <br />
                  experience
                </p>
              </div>
              <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={15} duration={8} />
                  </span>
                  +
                </h2>
                <p>
                  Projects <br />
                  Completed
                </p>
              </div>
              {/* <div className="counter-box">
                <h2>
                  <span className="counter">
                    <CountUp start={0} end={180} duration={5} />
                  </span>
                  +
                </h2>
                <p>
                  Awards <br />
                  Winning
                </p>
              </div> */}
            </div>
            <div className="about-right" data-aos="fade-left">
              <img className="about_img_1" src={img2} alt="img" />
              <img className="about_img_2" src={img1} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
