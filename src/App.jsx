import { useState } from "react";
import "./App.css";
import Header from "./Header";
function App() {
  const [productCollection, setProductCollection] = useState([]);

  const addProduct = (product) => {
    setProductCollection([...productCollection, product]);
    console.log(productCollection);
  };

  const product = {
    name: "React Presto",
    price: "20.99",
  };

  return (
    <>
      <Header />
    </>
  );
}

export default App;
