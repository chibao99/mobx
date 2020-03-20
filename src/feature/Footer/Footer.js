import React from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const Footer = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="THÔNG TIN SHOP" />
              <List link inverted>
                <List.Item>
                  Địa chỉ: 33 đường số 10, P5, Q.Gò Vấp, TP.Hồ Chí Minh
                </List.Item>
                <List.Item>Số điện thoại: 0892 565 223</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="CHÍNH SÁCH KHÁCH HÀNG" />
              <List link inverted>
                <List.Item as="a">Chính sách giao hàng</List.Item>
                <List.Item as="a">Chính sách đổi sản phẩm</List.Item>
                <List.Item as="a">Chính sách trả sản phẩm</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="TƯƠNG TÁC VỚI CHÚNG TÔI" />
              <List link inverted>
                <List.Item as="a" href="#">
                  <Button color="facebook">
                    <Icon name="facebook" /> Facebook
                  </Button>
                </List.Item>
                <List.Item as="a" href="#">
                  <Button color="twitter">
                    <Icon name="twitter" /> Twitter
                  </Button>
                </List.Item>
                <List.Item
                  as="a"
                  href="https://www.youtube.com/watch?v=zqg2WeJia48"
                >
                  <Button color="instagram">
                    <Icon name="instagram" /> Instagram
                  </Button>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          <Divider inverted section />
          <List.Item size="small">
            <List.Item>
                <Icon name='copyright outline'/>Lê Chí Bảo
            </List.Item>
          </List.Item>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
