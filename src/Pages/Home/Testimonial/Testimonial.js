import React from "react";
import "./Testimonial.css";
import testbg from "../../../images/com.png";
const Testimonial = () => {
  return (
    <div className="testimonial-bg py-5 ">
      <div className="container">
        <div className="row g-3 align-items-center ">
          <div className="col-md-5">
            <img className="w-100" src={testbg} alt="" />
          </div>
          <div className="col-md-7 border">
            <h2 className="bold pb-3">CUSTOMER COMMENTS</h2>
            <p>
              All the lorem ipsum generators on the internet tend to repeat
              predefined chunks as necessary, making this the first true on the
              Internet. uses a dictionary of over.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
