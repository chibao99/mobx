import React from "react";
import { Breadcrumb,Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
function Breadcrumbs() {
  return (
    <Container>
      <Breadcrumb size="big" style={{marginBottom:'1.5em'}}>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider icon="right chevron" />
        <Breadcrumb.Section active>Product</Breadcrumb.Section>
      </Breadcrumb>
    </Container>
  );
}

export default Breadcrumbs;
