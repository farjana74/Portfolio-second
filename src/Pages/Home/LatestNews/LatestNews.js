import React from "react";
import "./LatestNews.css";
const LatestNews = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center">LATEST NEWS</h2>
      <p className="text-center">Our department & special service</p>
      <div className="row pt-5">
        <div className="col-md-4">
          <img
            className="w-100 pb-5"
            src="http://newhospitalhtml.bdtask.com/images/blog_1.jpg"
            alt=""
          />
          <div>
            <div className="row ">
              <div className="col-md-3 m-0">
                <div className="border text-center data-bg">
                  <p>25 october</p>
                </div>
                <div className="border text-center small-date-bg">
                  <p>9</p>
                </div>
              </div>
              <div className="col-md-9">
                <p>Tag: Medical, Doctor</p>
                <h5 className="news-size">Latest blog post with image</h5>
                <p className="news-description">
                  There are many variations passages available, but the lorem,
                  ipsum sit have suffered alteration
                </p>
                <button className="news-button">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="w-100 pb-5"
            src="http://newhospitalhtml.bdtask.com/images/blog_2.jpg"
            alt=""
          />
           <div>
            <div className="row ">
              <div className="col-md-3 m-0">
                <div className="border text-center data-bg">
                  <p>25 october</p>
                </div>
                <div className="border text-center small-date-bg">
                  <p>9</p>
                </div>
              </div>
              <div className="col-md-9">
                <p>Tag: Medical, Doctor</p>
                <h5 className="news-size">Latest blog post with image</h5>
                <p className="news-description">
                  There are many variations passages available, but the lorem,
                  ipsum sit have suffered alteration
                </p>
                <button className="news-button">Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img
            className="w-100 pb-5"
            src="http://newhospitalhtml.bdtask.com/images/blog_3.jpg"
            alt=""
          />
           <div>
            <div className="row ">
              <div className="col-md-3 m-0">
                <div className="border text-center data-bg">
                  <p>25 october</p>
                </div>
                <div className="border text-center small-date-bg">
                  <p>9</p>
                </div>
              </div>
              <div className="col-md-9">
                <p>Tag: Medical, Doctor</p>
                <h5 className="news-size">Latest blog post with image</h5>
                <p className="news-description">
                  There are many variations passages available, but the lorem,
                  ipsum sit have suffered alteration
                </p>
                <button className="news-button">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
