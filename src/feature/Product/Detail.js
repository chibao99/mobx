import React, { useContext } from "react";
import store from "../../app/store/store";
import { observer } from "mobx-react-lite";
import { toast } from "react-toastify";
import {
  Divider,
  Header,
  Icon,
  Button,
  Image,
  Grid,
  Item
} from "semantic-ui-react";
const Detail = props => {
  let { product } = props;
  const { onAddToCart } = useContext(store);
  const onAddToCart1 = product => {
    onAddToCart(product, 1);
    toast.success("Thêm giỏ hàng thành công!!!😀");
  };
  return (
    <Grid>
      <Grid.Column width="7">
        <Image size="huge" src={product.image} style={{ height: "400px" }} />
      </Grid.Column>
      <Grid.Column width="7" className="info-text">
        <Item>
          <Item.Content>
            <Item.Header className="nameDetail">{product.name}</Item.Header>
            <Item.Meta>
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="money bill alternate" />
                  Money
                </Header>
              </Divider>
              <span className="price">{product.price} VND</span>
            </Item.Meta>
            <Item.Description className="des">
              <Divider horizontal>
                <Header as="h4">
                  <Icon name="tag" />
                  Description
                </Header>
              </Divider>
              {product.descripe}
            </Item.Description>
          </Item.Content>
          <Button
            onClick={() => onAddToCart1(product, 1)}
            fluid
            color="violet"
            size="large"
          >
            Thêm Vào Giỏ hàng
          </Button>
        </Item>
      </Grid.Column>
    </Grid>
  );
};
export default observer(Detail);
