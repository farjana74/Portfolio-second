import React, { useEffect, useState } from "react";

const DepartmentSection = () => {
  const [department, setDepartment] = useState([]);
  const [showPortalName, setShowPortalName] = useState("liver")
  const  [portalImage, setPortalImage] = useState('https://i.ibb.co/ZYWR5jc/human-liver-icon-vector-15262578.jpg')
  console.log(showPortalName)

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);

  const handleClick = (data) => {
    setShowPortalName(data.name);
    setPortalImage(data.image)
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">DEPARTMENT</h2>
      <p className="text-center">Our department & special service</p>

      <div className="row">
        <div className="col-md-4">
          <div className="row">
            {department.map((showDepartment) => {
              return (
                <>
                  <div
                    onClick={(e) => handleClick(showDepartment)}
                    className="col-md-6 border"
                  >
                    <img className="w-100" src={showDepartment.image} alt="" />
                    <h2>{showDepartment.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-md-4">
        <h2>{showPortalName}</h2>
        <img className="w-100" src={portalImage} alt="" />

        </div>
        <div className="col-md-4">
          <h4>Heart disease</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>

          <div className="d-flex justify-content-between">
            <div>
              <button>MAKE APPOINTMENT</button>
            </div>
            <div>
              <button>ALL DEPARTMENT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentSection;
