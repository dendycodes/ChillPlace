import React from "react";

import "./header.css";

// import headphone from "./headphones.png";

// import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div className="header">
      <div className="white">
        <div id="text">
          <h1 id="logo">ChillPlace</h1>

          <p>
            Want to relax for 10 minutes during the day at home or in office?
            <br /> Want to improve brain work? Or may be want to dream about
            beautiful nature landscapes? Increase concentration? <br />
            <br />
            This is the place which you are looking for.
            <br />
            by: Deniz Memduev
          </p>
        </div>
        {/* <img alt="img" id="image" src={headphone}></img> */}
      </div>
    </div>
  );
}
