import React, { useEffect, useState } from "react";
import "./DepartmentSection.css";

const DepartmentSection = () => {
  const [department, setDepartment] = useState([]);
  const [showPortalName, setShowPortalName] = useState("Liver");
  const [portalImage, setPortalImage] = useState(
    "https://i.ibb.co/stg2w9g/36-367347-organ-drawing-human-model-liver-png-removebg-preview.png"
  );

  const handleClick = (data) => {
    setShowPortalName(data.name);
    setPortalImage(data.image);
    // setSelected(!selected);
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);

  // let borderStyle = showPortalName ==='Liver' ? "1px solid black":"none"

  return (
    <div className="container py-5">
      <h2 className="text-center">DEPARTMENT</h2>
      <p className="text-center">Our department & special service</p>

      <div className="row  g-5 py-5 align-items-center ">
        <div className="col-md-4">
          <div className="row g-5 g-lg-3">
            {department.map((showDepartment, index) => {
              return (
                <>
                  <div
                    onClick={(e) => handleClick(showDepartment)}
                    className="col-md-6  text-center align-items-center div-background  "
                  >
                    <img
                      //  style={{border: portalImage ==='Liver'  ?"1px solid red":"none"}}
                      className="image-background"
                      src={showDepartment.image}
                      alt=""
                    />
                    <h2 className="text-size pt-3">{showDepartment.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-md-3 portalImage? ">
          <img className="w-100" src={portalImage} alt="" />
        </div>
        <div className="col-md-5">
          <h2 className="section-title pb-3">{showPortalName}</h2>
          <p className="section-description">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>

          <div className="d-flex justify-content-around   pt-5">
            <div>
              <button className="appointment-button">MAKE APPOINTMENT</button>
            </div>
            <div>
              <button className="department-button">ALL DEPARTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSection;
