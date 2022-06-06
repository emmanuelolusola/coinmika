import React from "react";
import "./CustomerReview.css";
import ProfileImage from "../images/customer_image.png";

function CustomerReview() {
  return (
    <div>
      <div className="container">
        <h1>Customer’s Review</h1>
        <div className="profile">
          <div className="profile-info">
            <img src={ProfileImage} alt="john lee" />
            <h5>John Lee</h5>
            <h6>
              {" "}
              “I love luxury, but the price has always limited my order. The
              Pinchpayer checkout payment option has made it possible for me to
              always be among the early adopters of new luxury products I desire
              to own.”
            </h6>
          </div>
          <div className="profile-info">
            <img src={ProfileImage} alt="john lee" />
            <h5>John Lee</h5>
            <h6>
              {" "}
              “I love luxury, but the price has always limited my order. The
              Pinchpayer checkout payment option has made it possible for me to
              always be among the early adopters of new luxury products I desire
              to own.”
            </h6>
          </div>
          <div className="profile-info">
            <img src={ProfileImage} alt="john lee" />
            <h5>John Lee</h5>
            <h6>
              {" "}
              “I love luxury, but the price has always limited my order. The
              Pinchpayer checkout payment option has made it possible for me to
              always be among the early adopters of new luxury products I desire
              to own.”
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
