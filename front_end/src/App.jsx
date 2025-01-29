import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Deals from "./Deals";
import ProductsDisplay from "./ProductsDisplay";
import ContactLogos from "./ContactLogos";
import Categories from "./Categories";
import prImg1 from "./nikePhotos/product1.png";
import prImg2 from "./nikePhotos/product2.png";
import prImg3 from "./nikePhotos/product3.png";
import prImg4 from "./nikePhotos/product4.png";
import prImg5 from "./nikePhotos/product5.png";

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
    img: prImg1,
  };

  const product2 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
  };

  const product3 = {
    name: "Nike Jumper 1",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg3,
  };

  const product4 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg4,
  };

  const product5 = {
    name: "Optimum Pride",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
  };

  const product6 = {
    name: "Nike Panakbo",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg1,
  };

  const productCollection = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
  ];

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
          <Categories />
          <ProductsDisplay products={productCollection} />
        </div>
      </div>
    </>
  );
}

export default App;
