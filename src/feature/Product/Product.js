import React from "react";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Product = ({ product }) => {
  return (
      <Card
        color="olive"
        style={{ margin: "2em 0" }}
        image={product.image}
        header={product.name}
        meta={product.price + " VND"}
        description={product.descripe}
        alt={product.name}
      />
  );
};

export default Product;
