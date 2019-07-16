import { action } from "easy-peasy";

export default {
  // . . . CART PRODUCTS . . .
  currentPage: 1,
  productsPerPage: 5,

  // . . . ACTIONS . . .
  setCurrentPage: action((state, page) => {
    state.currentPage = page;
  })
}; // end
