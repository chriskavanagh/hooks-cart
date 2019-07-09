import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBBtn } from "mdbreact";

const Cart = ({ items, delItem }) => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardTitle className="text-center">
          {!items.length > 0 && <p>Your Cart Is Empty </p>}
          {items.length > 0 && (
            <p
              style={{
                textAlign: "center",
                marginBottom: ".1rem",
                textDecoration: "underline"
              }}
            >
              My Cart
            </p>
          )}
        </MDBCardTitle>

        <MDBCardBody>
          <table cellpadding="10" style={{ width: "100%" }}>
            {items.map((item, index) => (
              <tr key={index}>
                <td>
                  <b>{item.name}</b>
                </td>
                <td>
                  <b>$</b>
                  {item.price.toFixed(2)} x({item.quantity})
                </td>

                <td>
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
                </td>
              </tr>
            ))}
          </table>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Cart;
