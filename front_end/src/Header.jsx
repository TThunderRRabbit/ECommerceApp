import React from "react";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="navigation icon-padding">
          <span class="material-symbols-rounded menu icon">menu</span>
        </div>
        <div className="splitHeader">
          <div className="search">
            <div className="div icon-padding">
              <span class="material-symbols-rounded search icon">search</span>
            </div>
            <input className="searchInput"></input>
          </div>
          <div className="cart">
            <span class="material-symbols-rounded cart icon">
              shopping_cart
            </span>
          </div>
          <div className="message">
            <span class="material-symbols-rounded forum icon">forum</span>
          </div>
        </div>
      </div>
    </>
  );
}
