import React from "react";
import "./ChoseUs.css";
import { BsTelephoneInbound } from "react-icons/bs";
import { LuMicroscope } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaAsymmetrik } from "react-icons/lia";
const ChoseUs = () => {
  return (
    <div className=" chosen-bg py-5">
      <div className="py-5">
        <h1 className="text-center bold ">Why Choose Us</h1>
        <p className="text-center">Our department & special service</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <form className=" form-background shadow-lg p-3">
              <h2 className="bold pb-3">Appointment Form</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name And SurName
                </label>
                <input
                  type="email"
                  class="form-control form-bg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="email"
                  class="form-control form-bg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Patient Number
                </label>
                <input
                  type="email"
                  class="form-control form-bg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Hourly Preference
                </label>
                <input
                  type="email"
                  class="form-control form-bg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control form-bg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary button-form">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <img
              className="w-100"
              src="https://i.ibb.co/jz1BgPz/appointment.png"
              alt=""
            />
          </div>
          <div className="col-md-4">
            <div className="d-flex pb-5  align-content-center justify-content-between">
              <div className=" p-3">
                <BsTelephoneInbound className="icon-bg " />
              </div>
              <div className="">
                <h5>Health Information</h5>
                <p className="chosen-description">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
            <div className="d-flex pb-5  align-content-center justify-content-between">
              <div className=" p-3">
                <LuMicroscope className="icon-bg " />
              </div>
              <div className="">
                <h5>Health Information</h5>
                <p className="chosen-description">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
            <div className="d-flex pb-5  align-content-center justify-content-between">
              <div className=" p-3">
                <FaUserDoctor className="icon-bg " />
              </div>
              <div className="">
                <h5>Health Information</h5>
                <p className="chosen-description">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
            <div className="d-flex pb-5 align-content-center justify-content-between">
              <div className=" p-3">
                <LiaAsymmetrik className="icon-bg " />
              </div>
              <div className="">
                <h5>Health Information</h5>
                <p className="chosen-description">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
