import React, { useState, Fragment } from "react";
import NavbarPage from "./Navbar";
import Products from "./Products";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);

  const handleChange = e => {
    const { value } = e.target;
    setQuantity(parseInt(value));
  };

  const addItem = item => {
    let clone = [...products];
    let index = clone.findIndex(i => i.id === item.id);

    if (index !== -1) {
      clone[index].quantity += quantity;
      setProducts([...clone]);
      setQuantity(1);
    } else {
      item.quantity = quantity;
      setProducts([...products, item]);
      setQuantity(1);
    }
  };

  const delItem = item => {
    setProducts(
      products.filter(i => {
        return i.id !== item.id;
      })
    );
  };

  return (
    <Fragment>
      <NavbarPage />
      <div className="container m-0 p-0">
        <div className="titleWrapper">
          <h1 className="title">Select Dropdown Example</h1>
        </div>

        <div className="parent">
          <Products addItem={addItem} handleChange={handleChange} />
          <Cart items={products} delItem={delItem} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
