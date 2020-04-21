import React, { useContext, useEffect, useState } from 'react';
import storeAPI from '../../app/store/storeAPI';
import { Grid, Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Product from './Product';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';

const Products = ({ match }) => {
    const { url } = match;
    const { getProductApi, products, onGetProductByName } = useContext(
        storeAPI
    );
    useEffect(() => {
        getProductApi();
    }, [getProductApi]);

    const [all, setall] = useState([]);

    const display = (name) => {
        if (name === 'all') {
            setall(products);
        } else {
            onGetProductByName(name).then((res) => {
                setall(res);
            });
        }
    };

    return (
        <Container>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='red'
                onClick={()=>display('all')}
            >
                All
            </Button>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='orange'
                onClick={()=>display('Louis')}
            >
                Louis
            </Button>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='yellow'
                onClick={()=>display('X-men')}
            >
                X-men
            </Button>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='olive'
            >
                Olive
            </Button>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='green'
            >
                Green
            </Button>
            <Button
                style={{ marginRight: '4em', marginLeft: '3em' }}
                color='teal'
            >
                Teal
            </Button>
            {
                <Grid>
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
