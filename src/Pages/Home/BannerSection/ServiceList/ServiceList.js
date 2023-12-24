import React from "react";
import { TbDirectionSignFilled } from "react-icons/tb";
import "./ServiceList.css";
const ServiceList = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-4 service-background p-4">
          <h2 className="first-header text-white pb-3">Our Service List</h2>
          <p className="text-white pb-5 service-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div>
            <button className="text-white px-5 py-3 rounded-5 border-0 button-background ">View All Services</button>
          </div>
        </div>
        <div className="col-md-4 benefit-background p-4">
          <h2 className="first-header text-white">Our Benefits</h2>
          <p className="text-white pb-3">It is a long established fact that a reader will.</p>

          <div className="d-flex  ">
            <div>
              <TbDirectionSignFilled className="text-white" />
            </div>
            <div>
              <p className="ps-3 text-white">Qualified Staff of Doctors</p>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <TbDirectionSignFilled className="text-white" />
            </div>
            <div>
              <p className="ps-3 text-white">Employee Occupational Health & Wellness</p>
            </div>
          </div>
          <div className="d-flex ">
            <div>
              <TbDirectionSignFilled className="text-white" />
            </div>
            <div>
              <p className="ps-3 text-white">Save Your Money and Time with us</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <TbDirectionSignFilled className="text-white"  />
            </div>
            <div>
              <p className="ps-3 text-white">24x7 Emergency service</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <TbDirectionSignFilled  className="text-white"/>
            </div>
            <div>
              <p className="ps-3 text-white">Qualified Staff of Doctors</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 service-background p-4">
          <h2 className="first-header text-white">Our Working Hours</h2>
          <p className="text-white  service-description">It is a long established fact that a reader will .</p>
          <div className="pt-4">
            <div className="d-flex justify-content-between text-white">
              <div>
                <p>Monday-Wednesday</p>
              </div>
              <div>
                <p>08.00-18.00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between text-white">
              <div>
                <p>Monday-Wednesday</p>
              </div>
              <div>
                <p>08.00-18.00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between text-white">
              <div>
                <p>Monday-Wednesday</p>
              </div>
              <div>
                <p>08.00-18.00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between text-white">
              <div>
                <p>Monday-Wednesday</p>
              </div>
              <div>
                <p>08.00-18.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
