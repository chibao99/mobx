import React from 'react';
import { Breadcrumb, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

function Breadcrumbs({ item }) {
    return (
        <Container>
            <Breadcrumb size='big' style={{ marginBottom: '1.5em' }}>
                <Link to='/'>
                    <Breadcrumb.Section>Home</Breadcrumb.Section>
                </Link>
                <Breadcrumb.Divider icon='right chevron' />
                {item.map((val,index) => {
                    return <Link key={index} to={val.to}>
                        <Breadcrumb.Section>{val.label}</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                    </Link>;
                })}
            </Breadcrumb>
        </Container>
    );
}

export default Breadcrumbs;
