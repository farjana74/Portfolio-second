import React, { useEffect, useState } from "react";
import { GiLiver } from "react-icons/gi";
import { PiBrainLight } from "react-icons/pi";
import { FaTeeth } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdHearing } from "react-icons/md";

const DepartmentSection = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center">DEPARTMENT</h2>
      <p className="text-center">Our department & special service</p>

      <div className="row">
        <div className="col-md-4">
          <div className="row">
            
              {
                department.map(showDepartment=>{
                    return(
                        <>
                        <div className="col-md-6">
                        <h2>{showDepartment.name}</h2>
                        </div>
                        
                        </>
                    )

                })
              }
        
          </div>
        </div>
        <div className="col-md-4"></div>
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
