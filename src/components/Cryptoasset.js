import React from "react";
import "./Cryptoasset.css";
import Imagebtc from "../images/bitcoin.svg";
import Imageeth from "../images/ethereum.svg";
import Imagebnc from "../images/binance.svg";
import Imagetron from "../images/tron.svg";
import Imagemnr from "../images/monero.svg";
import Imageltc from "../images/litecoin.svg";
import Imagedgc from "../images/dogecoin.svg";
import Imagetht from "../images/theta.svg";

function Cryptoasset() {
  return (
    <div>
      <h1 className="cryptoasset">Crypto Assets</h1>
      <div className="container">
        <div className="top">
          <img src={Imagebtc} alt="coin" />
          <img src={Imageeth} alt="coin" />
          <img src={Imagetron} alt="coin" />
          <img src={Imagebnc} alt="coin" />
          <img src={Imagemnr} alt="coin" />
          <img src={Imagetht} alt="coin" />
          <img src={Imagedgc} alt="coin" />
        </div>
        <div className="middle">
          <img src={Imagetron} alt="coin" />
          <img src={Imagedgc} alt="coin" />
          <img src={Imagemnr} alt="coin" />
          <img src={Imagetht} alt="coin" />
          <img src={Imagebtc} alt="coin" />
          <img src={Imageeth} alt="coin" />
          <img src={Imagebnc} alt="coin" />
        </div>
        <div className="bottom">
          <img src={Imagebtc} alt="coin" />
          <img src={Imageeth} alt="coin" />
          <img src={Imagetron} alt="coin" />
          <img src={Imagebnc} alt="coin" />
          <img src={Imageltc} alt="coin" />
          <img src={Imagetht} alt="coin" />
          <img src={Imagedgc} alt="coin" />
        </div>
      </div>
    </div>
  );
}

export default Cryptoasset;
