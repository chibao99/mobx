import React from "react";
import { Grid, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
const CartResult = () => {
  const data = JSON.parse(localStorage.getItem("CART"));
  const cart = data ? data : [];
  const total = cart => {
    var result = null;
    for (var i = 0; i < cart.length; i++) {
      result += cart[i].product.price * cart[i].quantity;
    }
    return result;
  };
  return (
    <Grid>
      <Grid.Column width="4">
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </Grid.Column>
      <Grid.Column width="6">
        <h4>
          <strong>{total(cart)}</strong>
        </h4>
      </Grid.Column>
      <Grid.Column width="6">
        <Button.Group>
          <Link to="/perfumes">
            <Button
              content="Tiếp Tục Mua Hàng"
              icon="left arrow"
              labelPosition="left"
            />
          </Link>
          <Link to="/checkout">
            <Button
              content="Thanh Toán"
              icon="right arrow"
              labelPosition="right"
            />
          </Link>
        </Button.Group>
      </Grid.Column>
    </Grid>
  );
};

export default CartResult;
