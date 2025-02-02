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
    let updatedCart = [...cart];

    let isInCart = false;

    for (let i = 0; i < updatedCart.length; i++) {
      if (updatedCart[i].id === id) {
        updatedCart.splice(i, 1);
        isInCart = true;
        break;
      }
    }

    if (!isInCart) {
      for (let i = 0; i < productsInView.length; i++) {
        if (productsInView[i].id === id) {
          updatedCart.push(productsInView[i]);
          break;
        }
      }
    }

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

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (inputValue) => {
    let found = false;

    for (let i = 0; i < allProducts.length; i++) {
      if (inputValue == allProducts[i].name) {
        console.log(allProducts[i]);
        found = true;
        break;
      }
    }

    if (found == false) {
      console.log("Product not in the collection");
    }
  };

  const [viewProduct, setViewProduct] = useState(false);

  const handleViewProduct = () => {
    setViewProduct(!viewProduct);
  };
  return (
    <>
      <div className="content">
        <Header
          displayCart={displayCart}
          inputValue={inputValue}
          handleChange={handleChange}
          const
          handleSearch={handleSearch}
        />

        <div className="mainDisplay">
          {viewProduct == false && (
            <>
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
                  handleViewProduct={handleViewProduct}
                />
              </div>{" "}
            </>
          )}
          {viewProduct == true && (
            <>
              <div className="lol">lol</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
