import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline
} from "mdbreact";

const NavbarPage = ({ items }) => {
  const [isOpen, setisOpen] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [filtered, setfiltered] = useState([]);

  const total = useStoreState(state => state.Products.items.length);

  // easy-peasy action
  const addFilter = useStoreActions(
    actions => actions.CartModel.addfilteredList
  );

  const paginate = useStoreActions(actions => actions.Paginate.setCurrentPage);

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  const handleChange = e => {
    const { value } = e.target;
    setsearchQuery(value);
  };

  const handleSearch = () => {
    paginate(1);
    const filtered = items.filter(i => {
      return i.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    });

    setfiltered(filtered);
  };

  useEffect(() => {
    addFilter(filtered);
  });

  return (
    <MDBNavbar color="indigo" dark expand="md" className="navbar">
      <MDBNavbarBrand>
        <strong className="white-text">Acme {total}</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left />
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleChange}
                  onKeyUp={handleSearch}
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default NavbarPage;
