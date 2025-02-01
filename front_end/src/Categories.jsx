import React from "react";

export default function Categories({ view, setView }) {
  return (
    <>
      <div className="categories">
        <span
          className={`categoryIcon ${view === "All" ? "all" : ""}`}
          onClick={() => setView("All")}
        >
          All
        </span>
        <span
          className={`categoryIcon ${view === "Sneakers" ? "all" : ""}`} 
          onClick={() => setView("Sneakers")}
        >
          Sneakers
        </span>
        <span
          className={`categoryIcon ${view === "Clothes" ? "all" : ""}`} 
          onClick={() => setView("Clothes")}
        >
          Clothes
        </span>
        <span
          className={`categoryIcon ${view === "Mens" ? "all" : ""}`} 
          onClick={() => setView("Mens")}
        >
          Mens
        </span>
        <span
          className={`categoryIcon ${view === "Kids" ? "all" : ""}`} 
          onClick={() => setView("Kids")}
        >
          Kids
        </span>
        <div className="categoryCircles">
          <div className="circle category"></div>
          <div className="circle category"></div>
          <div className="circle category"></div>
        </div>
      </div>
    </>
  );
}
