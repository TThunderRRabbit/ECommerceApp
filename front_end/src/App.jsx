import { useState, useEffect } from "react";
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
  // const [allProducts, setProductCollection] = useState([]);

  // const addProduct = (product) => {
  //   setProductCollection([...allProducts, product]);
  //   console.log(allProducts);
  // };
  const [view, setView] = useState("All");
  const product1 = {
    name: "Air Max 97",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg1,
    category: ["Sneakers", "Clothes"],
  };

  const product2 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
    category: ["Clothes"],
  };

  const product3 = {
    name: "Nike Jumper 1",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg3,
    category: ["Clothes", "Mens"],
  };

  const product4 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg4,
    category: ["Kids"],
  };

  const product5 = {
    name: "Optimum Pride",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
    category: ["Kids"],
  };

  const product6 = {
    name: "Nike Panakbo",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg1,
    category: ["Kids"],
  };

  const allProducts = [
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

  const [productsInView, setProductsInView] = useState(allProducts);

  const mensList = allProducts.filter((product) =>
    product.category.includes("Mens")
  );

  const [indexOfCart, setIndexOfCart] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (index) => {
    setCart([...cart, productsInView[index]]);
  };

  const displayCart = () => {
    console.log(cart);
  };

  useEffect(() => {
    if (view === "Mens") {
      setProductsInView(mensList);
    } else if (view === "All") {
      setProductsInView(allProducts);
    }
  }, [view]);

  return (
    <>
      <Header displayCart={displayCart} />

      <div className="mainDisplay">
        <div className="leftDisplay">
          <Deals />
          <ContactLogos />
        </div>
        <div className="rightDisplay">
          <Categories view={view} setView={setView} />
          <ProductsDisplay products={productsInView} addToCart={addToCart} />
        </div>
      </div>
    </>
  );
}

export default App;
