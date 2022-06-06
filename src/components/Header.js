import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../images/coinmika_logo.svg";

function header() {
  return (
    <div>
      <div className="navbar">
        <Logo />
        <ul>
          <li>Product</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Youtube</li>
        </ul>
        <button>See our Whitepaper</button>
      </div>
    </div>
  );
}

export default header;
