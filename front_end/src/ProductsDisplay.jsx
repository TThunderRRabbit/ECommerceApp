import React from "react";

export default function ProductsDisplay({ products }) {
  return (
    <div className="productsCollection">
      {products.map((product, index) => (
        <div className="productCard" key={index}>
          <div className="productName">${product.name}</div>
          <div className="productPrice">${product.price}</div>
        </div>
      ))}
    </div>
  );
}
