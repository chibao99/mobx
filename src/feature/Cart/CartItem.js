import React, { useContext } from "react";
import { Table, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { observer } from "mobx-react-lite";
import store from "../../app/store/store";
const CartItem = ({ cart }) => {
  const total = (product, quantity) => {
    return product * quantity;
  };
  const { onDeleteToCart, onUpdateQuantity } = useContext(store);
  const removeAndUpdateProductOnCart = (product, quantity) => {
    if (quantity > 0) {
      onUpdateQuantity(product, quantity);
      toast.info("Cập nhật giỏ hàng thành công!!!");
    }
    if (quantity == 0) {
      onDeleteToCart(product);
      toast.error("Xóa giỏ hàng thành công ");
    }
  };
  return (
    <Table.Row>
      <Table.Cell>
        <Image src={cart.product.image} size="tiny" />
      </Table.Cell>
      <Table.Cell>{cart.product.name}</Table.Cell>
      <Table.Cell>{cart.product.price}</Table.Cell>
      <Table.Cell>
        <span className="qty" style={{ marginRight: "10px" }}>
          {cart.quantity}
        </span>
        <Button.Group>
          <a href="/cart">
            <Button
              onClick={() =>
                removeAndUpdateProductOnCart(cart.product, cart.quantity - 1)
              }
              icon="minus"
            />
          </a>
          <a href="/cart">
            <Button
              onClick={() =>
                removeAndUpdateProductOnCart(cart.product, cart.quantity + 1)
              }
              icon="plus"
            />
          </a>
        </Button.Group>
      </Table.Cell>
      <Table.Cell>{total(cart.product.price, cart.quantity)}</Table.Cell>
    </Table.Row>
  );
};

export default observer(CartItem);
