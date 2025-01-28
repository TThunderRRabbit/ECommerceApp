import React from "react";

export default function Categories() {
  return (
    <>
      <div className="categories">
        <span className="categoryIcon all">All</span>
        <span className="categoryIcon ">Sneakers</span>
        <span className="categoryIcon">Clothes</span>
        <span className="categoryIcon">Mens</span>
        <span className="categoryIcon">Kids</span>
        <div className="categoryCircles">
          <div className="circle category"></div>
          <div className="circle category"></div>
          <div className="circle category"></div>
        </div>
      </div>
    </>
  );
}
