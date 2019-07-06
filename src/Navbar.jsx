import React, { useState, useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline
} from "mdbreact";

const NavbarPage = ({ items, paginate }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };

  return (
    <MDBNavbar color="indigo" dark expand="md" className="navbar">
      <MDBNavbarBrand>
        <strong className="white-text">Acme Development</strong>
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
