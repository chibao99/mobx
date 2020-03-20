import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import store from "../../app/store/store";
import { Container, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Detail from "./Detail";
import ProductRelated from "./ProductRelated";
const DetailProduct = ({ match }) => {
  const { products } = useContext(store);
  var { id } = match.params;
  var dem = 0;
  return (
    <Container className="info">
      {products.map((product, index) => {
        if (product.id == id) {
          return <Detail key={index} product={product} />;
        }
      })}
      <h4 className="text1">Các Sản Phẩm Liên Quan </h4>
      <Grid>
        {products.map((product, index) => {
          if (dem < 3) {
            dem++;
            if (product.id !== id) {
              return (
                <Grid.Column key={index} width={5} style={{marginRight:'22px'}}>
                  <ProductRelated  product={product} />
                </Grid.Column>
              );
            }
          }
        })}
      </Grid>
    </Container>
  );
};
export default observer(DetailProduct);
