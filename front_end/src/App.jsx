import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ProductsDisplay from "./ProductsDisplay";
function App() {
  // const [productCollection, setProductCollection] = useState([]);

  // const addProduct = (product) => {
  //   setProductCollection([...productCollection, product]);
  //   console.log(productCollection);
  // };

  const product1 = {
    name: "Air Max 97",
    price: 20.99,
    inCart: false,
    checkedOut: false,
  };

  const productCollection = [product1];

  console.log(productCollection);

  return (
    <>
      <Header />
      <ProductsDisplay products={productCollection} />
      <div className="mainDisplay">
        <div className="leftDisplay"></div>
        <div className="rightDisplay"></div>
      </div>
    </>
  );
}

export default App;
