import React from "react";
import { Grid, Menu, Container, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Route, Link } from "react-router-dom";
const HeaderMenu = () => {
  const data = JSON.parse(localStorage.getItem("CART"));
  const count = data? data.length : 0;
  return (
    <Container>
      <Grid style={{ marginTop: "1em", marginBottom: "1em" }}>
        <Grid.Column>
          <Menu size="large" pointing tabular>
            {showMenus(menus)}
            <Menu.Item position="right">
              <a href="/cart">
                <Button animated="vertical">
                  <Button.Content hidden>{count  }</Button.Content>
                  <Button.Content visible>
                    <Icon name="shop" />
                  </Button.Content>
                </Button>
              </a>
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true
  },
  {
    name: "Sản Phẩm",
    to: "/perfumes",
    exact: false
  },
  {
    name: "FAQs",
    to: "/FAQs",
    exact: false
  },
  {
    name: "Liên Hệ",
    to: "/contact",
    exact: false
  }
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <Link to={to}>
            <Menu.Item>{label}</Menu.Item>
          </Link>
        );
      }}
    />
  );
};
const showMenus = menus => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          to={menu.to}
          label={menu.name}
          activeOnlyWhenExact={menu.exact}
        />
      );
    });
  }
  return result;
};
export default HeaderMenu;
