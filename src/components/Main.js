import React from "react";
import "./Main.css";
import imageicon from "../images/phone_main.png";
import { ReactComponent as Googleplay } from "../images/googleplay.svg";
import { ReactComponent as Appstore } from "../images/appstore.svg";

function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="main-left">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            pharetra risus fermentum elementum placerat turpis nunc porttitor
            congue. dolor sit amet, consectetur adipiscing elit Diam pharetra
            risus fermentum elementum placerat
          </p>
          <h6>COMING SOON</h6>
          <div className="download">
            <button>
              <Googleplay />
              <div className="text">
                <p>GET IT ON</p>
                <h5>Google Play</h5>
              </div>
            </button>
            <button>
              <Appstore />
              <div className="text">
                <p>DOWNLOAD ON THE</p>
                <h5>App Store</h5>
              </div>
            </button>
          </div>
        </div>
        <div className="main-right">
          <img src={imageicon} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default Main;
