import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol } from "mdbreact";

const Cart = ({ items, delItem }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardTitle className="text-center">
          {!items.length && <p>Your Cart Is Empty </p>}
          {items.length && (
            <p
              style={{
                textAlign: "center",
                marginBottom: "2rem"
              }}
            >
              My Cart
            </p>
          )}
        </MDBCardTitle>

        <MDBCardBody>
          <ul style={{ listStyleType: "circle" }}>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)} x{" "}
                <span className="quantityText">{item.quantity}</span>
                <span>
                  <i
                    onClick={() => delItem(item)}
                    className="fa fa-trash"
                    aria-hidden="true"
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      color: "#B22222"
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
          <hr />
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Cart;
