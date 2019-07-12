import { action } from "easy-peasy";

export default {
  // . . . CART PRODUCTS . . .
  quantity: 0,
  filteredList: [],
  cartCount: 0,
  // . . . ACTIONS . . .
  addQuantity: action((state, quantity) => {
    state.quantity = quantity;
  }),
  addfilteredList: action((state, list) => {
    state.filteredList = list;
    if (state.filteredList.length === 0) state.filteredList = [];
    else state.filteredList = list;
  })
}; // end
