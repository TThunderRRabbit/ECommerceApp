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
    id: 1,
  };

  const product2 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
    category: ["Clothes"],
    id: 2,
  };

  const product3 = {
    name: "Nike Jumper 1",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg3,
    category: ["Clothes", "Mens"],
    id: 3,
  };

  const product4 = {
    name: "React Presto",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg4,
    category: ["Kids"],
    id: 4,
  };

  const product5 = {
    name: "Optimum Pride",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg5,
    category: ["Kids"],
    id: 5,
  };

  const product6 = {
    name: "Nike Panakbo",
    price: 20.99,
    inCart: false,
    checkedOut: false,
    img: prImg1,
    category: ["Kids"],
    id: 6,
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

  const toggleCart = (id) => {
    let updatedCart = [...cart]; // Copy the current cart to avoid mutation

    let isInCart = false;

    // Using a for loop to check if the product is already in the cart
    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].id === id) {
        updatedCart.splice(i, 1); // Remove the item by creating a new array
        isInCart = true;
        break;
      }
    }

    if (!isInCart) {
      // If the product wasn't in the cart, find and add it to the new array
      for (let i = 0; i < productsInView.length; i++) {
        if (productsInView[i].id === id) {
          updatedCart.push(productsInView[i]);
          break;
        }
      }
    }

    // Set the new cart state (React will trigger a re-render)
    setCart(updatedCart);
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
      <div className="content">
        <Header displayCart={displayCart} />

        <div className="mainDisplay">
          <div className="leftDisplay">
            <Deals />
            <ContactLogos />
          </div>
          <div className="rightDisplay">
            <Categories view={view} setView={setView} />
            <ProductsDisplay
              products={productsInView}
              toggleCart={toggleCart}
              cart={cart}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
