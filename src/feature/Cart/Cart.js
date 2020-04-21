import React, { useContext } from 'react';
import { Table, Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CartItem from './CartItem';
import CartResult from './CartResult';
import { observer } from 'mobx-react-lite';
import store from '../../app/store/store';
import { Link } from 'react-router-dom';
const Cart = () => {
    const { perfumes } = useContext(store);
    const displayCart = () => {
        if (perfumes.length !== 0) {
            return (
                <Table color='olive'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell></Table.HeaderCell>
                            <Table.HeaderCell>Sản Phẩm</Table.HeaderCell>
                            <Table.HeaderCell>Giá</Table.HeaderCell>
                            <Table.HeaderCell>Số Lượng</Table.HeaderCell>
                            <Table.HeaderCell>Tổng Cộng</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {perfumes.map((cart, index) => {
                            return <CartItem key={index} cart={cart} />;
                        })}
                    </Table.Body>
                    <Table.Footer fullWidth>
                        <Table.HeaderCell colSpan='5'>
                            <CartResult />
                        </Table.HeaderCell>
                    </Table.Footer>
                </Table>
            );
        } else {
            return (
                <div style={{ textAlign: 'center', marginTop: '3em' }}>
                    <h1>GIỎ HÀNG BẠN ĐANG RỖNG</h1>
                    <Link to='/perfumes'>
                        <Button color='purple'>Quay lại mua hàng</Button>
                    </Link>
                </div>
            );
        }
    };
    return <Container>{displayCart()}</Container>;
};

export default observer(Cart);
