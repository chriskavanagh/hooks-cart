import React, { Fragment } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBBtn,
  MDBRow
} from "mdbreact";

const Cart = ({ items, delItem }) => {
  return (
    <MDBCol>
      <MDBCard className="card">
        <MDBCardTitle className="text-center card-title">
          <div className="card-title-wrapper">
            {!items.length > 0 && <p>Your Cart Is Empty </p>}
            {items.length > 0 && <p>My Cart</p>}
          </div>
        </MDBCardTitle>

        <MDBCardBody>
          <Fragment>
            <table cellSpacing="5" cellPadding="8" style={{ width: "100%" }}>
              {items.map((item, index) => (
                <tbody key={index}>
                  <tr className="border_bottom">
                    <td>
                      <b className="item-name">{item.name}</b>
                    </td>
                    <td className="item-price">
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
                </tbody>
              ))}
            </table>
            <hr />
            <div className="d-flex justify-content-center">
              <MDBBtn outline color="deep-orange" className="cartButton">
                Checkout
              </MDBBtn>
            </div>
          </Fragment>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Cart;
