import React from "react";
import aboutLogo from "../../../images/about.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div class=" #about container overflow-hidden py-5">
      <div class="row gy-5 justify-content-between  ">
        <div class="col-md-6 ">
          <div class="p-3  ">
            <img className="about-bg" src={aboutLogo} alt="" />
          </div>
        </div>
        <div class="col-md-6  pt-4 ">
          <div class=" ">
            <h1 className="text-start about-header">ABOUT US</h1>
            <p className="text-start about-title ">
              What we are and our history
            </p>
            <div>
              <p className="py-3 about-description ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
            <div>
              <button className="about-button">Read more</button>
            </div>
          </div>
          <div className="py-3">
            <hr />
          </div>
          <div class=" ">
            <h1 className="text-start about-header">VISION & MISSION</h1>
            <p className="text-start about-title ">Our goal and thoughts</p>
            <div>
              <p className="py-3 about-description ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
