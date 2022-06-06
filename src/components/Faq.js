import React from "react";
import CommentIcon from "../images/arrow_down.svg";

function Faq() {
  return (
    <div>
      <div className="container">
        <h1>Frequently Asked Question</h1>
        <h4>See questions</h4>
        <div className="comments">
          <div className="comments-container">
            <img src={CommentIcon} alt="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              et, vitae sem in augue commodo nisl interdum.
            </p>
          </div>
          <div className="comments-container">
            <img src={CommentIcon} alt="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              et, vitae sem in augue commodo nisl interdum.
            </p>
          </div>
          <div className="comments-container">
            <img src={CommentIcon} alt="icon" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              et, vitae sem in augue commodo nisl interdum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
