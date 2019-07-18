import React from "react";
import Select from "./Select";
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from "mdbreact";
import { useStoreState } from "easy-peasy";

const Products = ({ addItem, handleChange }) => {
  // easy-peasy state
  const currentPage = useStoreState(state => state.Paginate.currentPage);
  const items = useStoreState(state => state.Products.items);
  const filteredList = useStoreState(state => state.CartModel.filteredList);
  const productsPerPage = useStoreState(
    state => state.Paginate.productsPerPage
  );

  // calculate beginning & ending index
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // if search, (filteredList.length exists) use filteredList,if not use items
  const groceryList = filteredList.length > 0 ? filteredList : items;

  // get items for pagination
  const filteredItems = groceryList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <MDBTable responsive className="prodTable">
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>Add Item</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filteredItems.map((item, index) => (
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
            <td>
              <b>{item.name}</b>
            </td>
            <td>
              <Select handleChange={handleChange} />
            </td>
            <td>{item.price}</td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
};

export default Products;
