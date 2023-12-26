import React from "react";
import "./FooterFirst.css";
import footer1 from "../../../images/footer-post-1.jpeg";
import footer2 from "../../../images/footer-post-2.jpeg";
import footer3 from "../../../images/footer-post-3.jpeg";
import footerLogo from "../../../images/navLogo.png";
const FooterFirst = () => {
  return (
    <div className="footer-bg pt-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center border p-5">
          <div>
            <h5>Need a Doctor for Check-up?</h5>
            <h3 className="bold">JUST MAKE AN APPOINTMENT & YOU'RE DONE !</h3>
          </div>
          <div>
            <button className="footer-button">GET AN APPOINTMENT</button>
          </div>
        </div>
        <div className="row d-flex justify-content-between py-5">
          <div className="col-md-3">
            <img src={footerLogo} alt="" />
            <p className="py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the.
            </p>
          </div>
          <div className="col-md-3">
            <h2 className="pb-3">Latest News</h2>
            <div className="d-flex justify-content-around align-items-center pb-3">
              <div>
                <img className="footer-image" src={footer1} alt="" />
              </div>
              <div>
                <h6 className="footer-first-des">Healthy Lifestyle Tips</h6>
                <span>6 october, 2023</span>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center pb-3">
              <div>
                <img className="footer-image" src={footer2} alt="" />
              </div>
              <div>
                <h6 className="footer-first-des">Healthy Lifestyle Tips</h6>
                <span>6 october, 2023</span>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-center pb-3">
              <div>
                <img className="footer-image" src={footer3} alt="" />
              </div>
              <div>
                <h6 className="footer-first-des">Healthy Lifestyle Tips</h6>
                <span>6 october, 2023</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="pb-3">Latest Tweet</h2>
            <div className="pb-5">
              <p>
                Lorem Ipsum is @simply dummy text of the printing and
                typesetting industry.
              </p>
              <span>7 minutes ago</span>
            </div>
            <div className="pb-3">
              <p>
                Lorem Ipsum is @simply dummy text of the printing and
                typesetting industry.
              </p>
              <span>7 minutes ago</span>
            </div>
          </div>
          <div className="col-md-3">
            <h2 className="pb-3">Map</h2>
            <div className="map-bg p-3">
              <h2 className="text-center">Oops! Something went wrong.</h2>
              <p className="text-center">
                This page didn't load Google Maps correctly. See the JavaScript
                console for technical details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterFirst;
