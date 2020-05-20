import React, { useContext, useEffect, useState } from 'react';
import storeAPI from '../../app/store/storeAPI';
import { Grid, Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Product from './Product';
import { observer } from 'mobx-react-lite';
import { NavLink, useRouteMatch } from 'react-router-dom';

const Products = ({ match }) => {
    const { url } = match;
    // const x = useRouteMatch();
    // console.log(x.url);
    const {
        getProductApi,
        products,
        catalogs,
        getProductByCatalog,
        productsByCatalog,
    } = useContext(storeAPI);
    useEffect(() => {
        getProductApi();
    }, []);

    const [all, setall] = useState(products);

    const display = (name, id) => {
        if (name === 'all') {
            setall(products);
        } else {
            getProductByCatalog(id);
            setall(productsByCatalog);
        }
    };

    return (
        <Container>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='red'
                onClick={() => display('all')}
            >
                All
            </Button>
            {catalogs.map((val, index) => {
                return (
                    <Button
                        key={index}
                        style={{ marginRight: '4em', marginLeft: '3em' }}
                        color='orange'
                        onClick={() => display(val.name, val._id)}
                    >
                        {val.name}
                    </Button>
                );
            })}
            {
                <Grid style={{ marginTop: '3em' }}>
                    {all.map((product, index) => {
                        return (
                            <NavLink key={index} to={`${url}/${product._id}`}>
                                <Grid.Column style={{ margin: '1em 2.3em' }}>
                                    <Product product={product} />
                                </Grid.Column>
                            </NavLink>
                        );
                    })}
                </Grid>
            }
        </Container>
    );
};
export default observer(Products);
