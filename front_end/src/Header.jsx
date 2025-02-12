import React from "react";

export default function Header({
  displayCart,
  inputValue,
  handleChange,
  handleSearch,
}) {
  return (
    <>
      <div className="header">
        <div className="navigation icon-padding">
          <span class="material-symbols-rounded menu icon">menu</span>
        </div>
        <div className="splitHeader">
          <div className="search">
            <div className="div icon-padding">
              <span
                class="material-symbols-rounded search icon"
                onClick={() => handleSearch(inputValue)}
              >
                search
              </span>
            </div>
            <input
              className="searchInput"
              value={inputValue}
              onChange={handleChange}
            ></input>
          </div>
          <div className="cart" onClick={displayCart}>
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
