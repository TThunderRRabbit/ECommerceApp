import React from "react";
import nikePhoto1 from "./nikePhotos/nikePhoto1.png";
export default function Deals() {
  return (
    <>
      <div className="dealCard">
        <div className="dealDetails">
          <div className="dealCardTitle">
            <p className="percent">40%</p> Flash sale
          </div>
          <div className="dealCardDescription">on certain shoes</div>
        </div>
        <div className="shopNow">Shop now</div>

        <img src={nikePhoto1} className="nikePhoto" />
      </div>
    </>
  );
}
