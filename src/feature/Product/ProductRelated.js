import React from "react";
import { Container, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
const ProductRelated = ({ product }) => {
  return (
    <Container>
      <Link to={"/perfumes" + "/" + product.id}>
        <Card
          style={{ margin: "2em 0" }}
          image={product.image}
          header={product.name}
          meta={product.price + " VND"}
          description={product.descripe}
          alt={product.name}
        />
      </Link>
    </Container>
  );
};

export default ProductRelated;
