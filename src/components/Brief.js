import React from "react";
import "./Brief.css";
import imagestore from "../images/phone_store.png";
import imagebuy from "../images/phone_buy.png";
import imagep2p from "../images/phone_p2p.png";
import imagecreate from "../images/phone_create.png";

function Brief() {
  return (
    <div className="brief-container">
      <div className="store">
        <div className="store-left">
          <h1>Store Your Crypto</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            pharetra risus fermentum elementum placerat turpis nunc porttitor
            congue. dolor sit amet, consectetur adipiscing elit Diam pharetra
            risus fermentum elementum placerat
          </p>
          <button>Learn about our wallet</button>
        </div>
        <div className="store-right">
          <img src={imagestore} alt="store crypto" />
        </div>
      </div>
      <div className="buy">
        <div className="buy-left">
          <img src={imagebuy} alt="buy coins" />
        </div>
        <div className="buy-right">
          <h1>Buy Coins with Debit and Credit card</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            pharetra risus fermentum elementum placerat turpis nunc porttitor
            congue. dolor sit amet, consectetur adipiscing elit Diam pharetra
            risus fermentum elementum placerat
          </p>
        </div>
      </div>
      <div className="p2p">
        <div className="p2p-left">
          <h1>P2P buying and selling</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            pharetra risus fermentum elementum placerat turpis nunc porttitor
            congue. dolor sit amet, consectetur adipiscing elit Diam pharetra
            risus fermentum elementum placerat
          </p>
        </div>
        <div className="p2p-right">
          <img src={imagep2p} alt="p2p" />
        </div>
      </div>
      <div className="create">
        <div className="create-left">
          <img src={imagecreate} alt="create wallet" />
        </div>
        <div className="create-right">
          <h1>Create new crypto wallet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
            pharetra risus fermentum elementum placerat turpis nunc porttitor
            congue. dolor sit amet, consectetur adipiscing elit Diam pharetra
            risus fermentum elementum placerat
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brief;
