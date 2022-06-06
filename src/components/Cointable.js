import React from "react";
import Imagebitcoin from "../images/bitcoin.svg";
import Greenline from "../images/line_green.svg";
import Imageethereum from "../images/ethereum.svg";
import Blackline from "../images/line_black.svg";
import Imagedogecoin from "../images/dogecoin.svg";
import Imagetron from "../images/tron.svg";

function Cointable() {
  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Chart</th>
            <th>Trade</th>
          </thead>
          <tr>
            <td>
              <img src={Imagebitcoin} alt="coin" />
              <h4>Bitcoin</h4>
              <p>BTC</p>
            </td>
            <td>
              <h4>USD 34,876.00</h4>
            </td>
            <td>
              <img src={Greenline} alt="graph" />
            </td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Imageethereum} alt="coin" />
              <h4>Ethereum</h4>
              <p>ETH</p>
            </td>
            <td>
              <h4>USD 34,876.00</h4>
            </td>
            <td>
              <img src={Greenline} alt="graph" />
            </td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Imagedogecoin} alt="coin" />
              <h4>Dogecoin</h4>
              <p>DOGE</p>
            </td>
            <td>
              <h4>USD 34,876.00</h4>
            </td>
            <td>
              <img src={Blackline} alt="graph" />
            </td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src={Imagetron} alt="coin" />
              <h4>Tron</h4>
              <p>TRON</p>
            </td>
            <td>
              <h4>USD 34,876.00</h4>
            </td>
            <td>
              <img src={Blackline} alt="graph" />
            </td>
            <td>
              <button>Buy</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Cointable;
