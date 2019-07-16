import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";

const Pagination = props => {
  // easy-peasy state / total products and number per page
  const totalProducts = useStoreState(state => state.Products.items.length);
  const currentPage = useStoreState(state => state.Paginate.currentPage);
  const productsPerPage = useStoreState(
    state => state.Paginate.productsPerPage
  );

  // easy-peasy action to set current page
  const paginate = useStoreActions(actions => actions.Paginate.setCurrentPage);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  // next btn won't show if currentpage is last page
  const next = currentPage === pageNumbers.length ? null : true;

  // previous btn won't show if currentpage is first page
  const prev = currentPage === 1 ? null : true;

  return (
    <MDBPagination circle color="blue" className="mb-5">
      <MDBPageItem>
        <MDBPageNav
          aria-label="Previous"
          onClick={() => paginate(currentPage - 1)}
        >
          {prev && <span aria-hidden="true">Previous</span>}
        </MDBPageNav>
      </MDBPageItem>
      {pageNumbers.map(number => (
        <MDBPageItem
          onClick={() => paginate(number)}
          key={number}
          className={number === currentPage ? "active" : null}
        >
          <MDBPageNav className="page-link">{number}</MDBPageNav>
        </MDBPageItem>
      ))}
      <MDBPageItem>
        <MDBPageNav
          aria-label="Previous"
          onClick={() => paginate(currentPage + 1)}
        >
          {next && <span aria-hidden="true">Next</span>}
        </MDBPageNav>
      </MDBPageItem>
    </MDBPagination>
  );
};

export default Pagination;
