import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Deals from "./Deals";
import ProductsDisplay from "./ProductsDisplay";
import ContactLogos from "./ContactLogos";
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

      <div className="mainDisplay">
        <div className="leftDisplay">
          <Deals />
          <ContactLogos />
        </div>
        <div className="rightDisplay">
          {/* <ProductsDisplay products={productCollection} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
