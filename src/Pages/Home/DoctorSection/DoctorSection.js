import React from "react";
import doct1 from "../../../images/doctor_1.png";
import doct2 from "../../../images/doctor_2.png";
import doct3 from "../../../images/doctor_3.png";
import doct4 from "../../../images/doctor_4.png";
import "./DoctorSection.css";

const DoctorSection = () => {
  return (
    <div className="container py-5">
      <h1 className="bold text-center">OUR DOCTOR</h1>
      <p className="text-center">Our department & special service</p>
      <div className="row pt-5">
        <div className="col-md-3">
          <img className="w-100" src={doct1} alt="" />
          <div className="text-center  py-3 shadow">
            <h5>Dr.David Moniky</h5>
            <p className="doctor-name">Huntington's</p>
          </div>
        </div>
        <div className="col-md-3">
          <img className="w-100" src={doct2} alt="" />
          <div className="text-center  py-3 shadow">
            <h5>Dr.David Moniky</h5>
            <p className="doctor-name">Huntington's</p>
          </div>
        </div>
        <div className="col-md-3">
          <img className="w-100" src={doct3} alt="" />
          <div className="text-center  py-3 shadow">
            <h5>Dr.David Moniky</h5>
            <p className="doctor-name">Huntington's</p>
          </div>
        </div>
        <div className="col-md-3">
          <img className="w-100" src={doct4} alt="" />
          <div className="text-center  py-3 shadow">
            <h5>Dr.David Moniky</h5>
            <p className="doctor-name">Huntington's</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
