import React, { useState, Fragment } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { useStoreState } from "easy-peasy";
import NavbarPage from "./Navbar";
import Products from "./Products";
import Pagination from "./Pagination";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const items = useStoreState(state => state.Products.items);

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
      <NavbarPage items={items} />

      <div className="titleWrapper">
        <h1 className="title">Select Dropdown Example</h1>
      </div>

      <div className="wrapper">
        <div className="one">
          <Products addItem={addItem} handleChange={handleChange} />
        </div>
        <div className="two">
          <Pagination />
        </div>
        <div className="three">
          <Cart items={products} delItem={delItem} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
