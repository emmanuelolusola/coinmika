import React from "react";
import Twitter from "../images/twitter.svg";
import Youtube from "../images/youtube.svg";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";

function Footer() {
  return (
    <div>
      <div className="container">
        <div className="info">
          <p>CoinMika</p>
          <ul>
            <li>PRODUCT</li>
            <li>SUPPORT</li>
            <li>NEWS</li>
            <li>COMPANY</li>
            <li>CONTACTS</li>
            <li>ASSETS</li>
            <li>INFORMATION</li>
          </ul>
        </div>
        <div className="socials">
          <img src={Twitter} alt="twitter" />
          <img src={Youtube} alt="youtube" />
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
