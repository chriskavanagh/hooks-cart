import React from "react";
import Select from "./Select";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import { useStoreState } from "easy-peasy";

const Products = ({ addItem, handleChange }) => {
  // easy-peasy state
  const items = useStoreState(state => state.Products.items);
  const filteredList = useStoreState(state => state.CartModel.filteredList);

  // if search filteredList.length is use filteredList, if not use items
  const groceryList = filteredList.length > 0 ? filteredList : items;

  return (
    <div className="table">
      <MDBTable bordered>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>Add Item</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {groceryList.map((item, index) => (
            <tr key={index}>
              <td>
                <MDBBtn
                  outline
                  color="deep-orange"
                  size="sm"
                  onClick={() => addItem(item)}
                >
                  Add
                </MDBBtn>
              </td>
              <td>{item.name}</td>
              <td>
                <Select handleChange={handleChange} />
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default Products;
