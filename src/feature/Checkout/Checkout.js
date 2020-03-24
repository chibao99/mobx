import React, { useState,useContext } from "react";
import {
  Grid,
  Icon,
  Button,
  Form,
  Container,
  Divider,
  Statistic,
  Image
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import tinh from "../Checkout/Address/tinh_tp.json";
import quan from "../Checkout/Address/quan_huyen.json";
import store from "../../app/store/store";
import { observer } from "mobx-react-lite";

const Checkout = () => {
  const [txtTinh,setTinh] = useState("");
  const isChange = e => {
    setTinh(e.target.value);
  };
  const {perfumes} = useContext(store);
  const total = (product, quantity) => {
    return product * quantity;
  };
  const totalTemp = cart => {
    var result = null;
    for (var i = 0; i < cart.length; i++) {
      result += cart[i].product.price * cart[i].quantity;
    }
    return result;
  };
  const resultTotal = cart => {
    return totalTemp(cart) + 35;
  };
  //address
  var getTinh,
    getQuan = null;
  getTinh = tinh => {
    var result = [];
    for (var t in tinh) {
      result.push(tinh[t].name);
    }
    return result;
  };
  var t = getTinh(tinh);
  getQuan = name => {
    let result = [];
    for (var t in tinh) {
      for (var q in quan) {
        if (tinh[t].name == name) {
          if (quan[q].parent_code == tinh[t].code) {
            result.push(quan[q].name);
          }
        }
      }
    }
    return result;
  };
  var q = getQuan(txtTinh);
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Column width="7">
            <h4>Thông tin giao hàng</h4>
            <Form>
              <Form.Field>
                <input placeholder="Họ và tên" name="txtName" />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field width={5}>
                  <input placeholder="Email" name="txtEmail" />
                </Form.Field>
                <Form.Field width={2}>
                  <input placeholder="Số Điện Thoại" name="txtPhone" />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <input placeholder="Địa Chỉ" name="txtAddress" />
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <select  value={txtTinh} onChange={e => isChange(e)}>
                    <option disabled selected value="">Tỉnh/thành</option>
                    {t.map((val, index) => {
                      return (
                        <option key={index} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </Form.Field>
                <Form.Field>
                <select  value={txtTinh} onChange={e => isChange(e)}>
                    <option disabled selected value="">Quận/huyện</option>
                    {q.map((val, index) => {
                      return (
                        <option key={index} value={val}>
                          {val}
                        </option>
                      );
                    })}
                  </select>
                </Form.Field>
              </Form.Group>
              <h4>Phương thức thanh toán:</h4>
              <p>Thanh toán khi nhận hàng (COD)</p>
              <Button animated fluid color="olive">
                <Button.Content visible>Thanh Toán</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Form>
          </Grid.Column>
          <Grid.Column width={7}>
            <h4>Đơn hàng của tôi</h4>
            <Divider fitted />
            {perfumes.map((val, index) => {
              return (
                <Statistic.Group
                  size="tiny"
                  widths="3"
                  style={{ margin: "0.5em 0" }}
                  key={index}
                >
                  <Statistic>
                    <Image src={val.product.image} size="tiny" />
                  </Statistic>
                  <Statistic size="tiny">
                    <Statistic.Value>{val.quantity}</Statistic.Value>
                  </Statistic>
                  <Statistic size="tiny">
                    <Statistic.Value>
                      {total(val.product.price, val.quantity)}
                    </Statistic.Value>
                    <Statistic.Label>VND</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              );
            })}
            <Divider fitted />
            <div className="checkout-bill mt">
              <p className="s-text5">Tạm tính</p>
              <p className="s-text12 mr-4">{totalTemp(perfumes)} VND</p>
            </div>
            <div className="checkout-bill">
              <p className="s-text5">Phí ship</p>
              <p className="s-text12 mr-4">35 VND</p>
            </div>
            <div className="checkout-bill">
              <p className="s-text12 mr-4">Tổng cộng</p>
              <p className="s-text12 mr-4">{resultTotal(perfumes)} VND</p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default observer(Checkout);
