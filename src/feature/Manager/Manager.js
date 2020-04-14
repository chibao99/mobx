import React from 'react';
import { Container, Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import ManagerProduct from './ManagerProduct';
import ManagerContact from './ManagerContact';
const Manager = (props) => {
    return (
        <Container>
            <ManagerProduct />
            <Divider horizontal>Contact</Divider>
            <ManagerContact/>
        </Container>
    );
};


export default Manager;
