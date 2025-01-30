import React from "react";

export default function Categories({ view, setView }) {
  return (
    <>
      <div className="categories">
        <span
          className={`categoryIcon ${view === "All" ? "all" : ""}`} // Add this condition for "All"
          onClick={() => setView("All")}
        >
          All
        </span>
        <span
          className={`categoryIcon ${view === "Sneakers" ? "all" : ""}`} // Add condition for "Sneakers"
          onClick={() => setView("Sneakers")}
        >
          Sneakers
        </span>
        <span
          className={`categoryIcon ${view === "Clothes" ? "all" : ""}`} // Add condition for "Clothes"
          onClick={() => setView("Clothes")}
        >
          Clothes
        </span>
        <span
          className={`categoryIcon ${view === "Mens" ? "all" : ""}`} // Add condition for "Mens"
          onClick={() => setView("Mens")}
        >
          Mens
        </span>
        <span
          className={`categoryIcon ${view === "Kids" ? "all" : ""}`} // Add condition for "Kids"
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
