import React, { useContext } from "react";
import { Table, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import CartItem from "./CartItem";
import CartResult from "./CartResult";
import { observer } from "mobx-react-lite";
import store from "../../app/store/store";
const Cart = () => {
  const { perfumes } = useContext(store);
  return (
    <div>
      <Container>
        <Table color="olive">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Sản Phẩm</Table.HeaderCell>
              <Table.HeaderCell>Giá</Table.HeaderCell>
              <Table.HeaderCell>Số Lượng</Table.HeaderCell>
              <Table.HeaderCell>Tổng Cộng</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {perfumes.map((cart, index) => {
              return <CartItem key={index} cart={cart} />;
            })}
          </Table.Body>
        </Table>
        <CartResult />
      </Container>
    </div>
  );
};

export default observer(Cart);