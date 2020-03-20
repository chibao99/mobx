import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Message, Icon, Container } from "semantic-ui-react";
const NotFound = () => {
  return (
    <Container style={{ marginTop: "3em" }}>
      <Message icon>
        <Icon name="circle notched" loading />
        <Message.Content>
          <Message.Header>404</Message.Header>
          KHÔNG TÌM THẤY TRANG
        </Message.Content>
      </Message>
    </Container>
  );
};

export default NotFound;
