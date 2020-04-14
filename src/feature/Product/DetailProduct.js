import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import storeAPI from '../../app/store/storeAPI';
import { Container, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Detail from './Detail';
import ProductRelated from './ProductRelated';
const DetailProduct = ({ match }) => {
    const { getProductApi,products } = useContext(storeAPI);
    useEffect(() => {
        getProductApi();
    }, [getProductApi]);
    var { id } = match.params;
    var dem = 0;
    return (
        <Container className='info'>
            {products.map((product, index) => {
                if (product._id === id) {
                    return <Detail key={index} product={product} />;
                }
            })}
            <h4 className='text1'>Các Sản Phẩm Liên Quan </h4>
            <Grid>
                {products.map((product, index) => {
                    if (dem < 3) {
                        dem++;
                        if (product._id !== id) {
                            return (
                                <Grid.Column
                                    key={index}
                                    width={5}
                                    style={{ marginRight: '22px' }}
                                >
                                    <ProductRelated product={product} />
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
