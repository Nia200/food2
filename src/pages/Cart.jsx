import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/cart-page.css";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import useAuth from "../custom-hooks/useAuth";

import { Alert } from "@mui/material";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const { currentUser } = useAuth();

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />

      <section>
        {currentUser ? (
          <Container>
            <Row>
              <Col lg="12">
                {cartItems.length === 0 ? (
                  <h5 className="text-center">Your cart is Empty</h5>
                ) : (
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                )}

                <div className="mt-4">
                  <h6>
                    Subtotal: $
                    <span className="cart__subtotal">{totalAmount}</span>
                  </h6>
                  <p>Taxes and shopping will calculate at checkout</p>
                  <div className="cart__page-btn">
                    <button className="addToCart__btn me-4">
                      <Link to="/foods">Continue Shopping</Link>
                    </button>
                    <button className="addToCart__btn">
                      <Link to="/checkout">Proceed to checkout</Link>
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <Alert severity="warning">
            You are not Login, please Login in and try again
          </Alert>
        )}
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        {" "}
        <img src={image01} alt="" />{" "}
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
