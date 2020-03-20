import React, { useContext } from "react";
import store from "../../app/store/store";
import { Grid, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Product from "./Product";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

const Products = ({ match }) => {
  const { products } = useContext(store);
  var { url } = match;
  return (
    <Container>
      <Grid>
        {products.map((product, index) => {
          return (
            <NavLink key={index} to={`${url}/${product.id}`}>
              <Grid.Column style={{ margin: "1em 2.3em" }}>
                <Product product={product} />
              </Grid.Column>
            </NavLink>
          );
        })}
      </Grid>
    </Container>
  );
};
export default observer(Products);
